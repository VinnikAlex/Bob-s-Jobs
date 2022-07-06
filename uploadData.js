// UploadData script
// Upload sample data to the Strapi Backend for the COMP2110 Web
// Development project 
// This script wipes any existing content in: 'jobs', 'companies', 'job-applications'
// new data is added to: 'jobs', 'companies'


const fs = require('fs')

const axios = require('axios')
const qs = require('qs');

const BASE_URL = 'http://localhost:1337/api/'

let JWT = ''


/* Login to the Strapi API */
const login = async (identifier, password) => {
    const { data } = await axios.post('http://localhost:1337/api/auth/local', {
        identifier,
        password,
    });
    JWT = data.jwt
    console.log(`Logged in as '${identifier}'`)
}

/* remove all existing instaces of 'what' via 
 * DELETE requests to the API 
 */
const clearData = async (what) => {


    await axios.get(BASE_URL+what+"?pagination[pageSize]=500", {
            headers: {
                Authorization: 'Bearer '+JWT
            }
        })
         .then((response) => {
            return response.data
         })
         .then((data) => {
             data.data.forEach((thing) => {
                axios.delete(BASE_URL + what + '/' + thing.id, {
                    headers: {
                        Authorization: 'Bearer '+ JWT
                    }
                })
             })
         })
         console.log(`Old ${what} data cleared`)
}

/*
 * Upload one job via the API
 */
const uploadJob = async job => {

    const companyName = job.attributes.company.data.attributes.name
    delete job.attributes.company 

    // first find the company id with a GET query
    const query = qs.stringify({
    filters: {
            name: {
                $eq: companyName,
            },
        },
    }, {
        encodeValuesOnly: true,
    });

    await axios({
        method: 'get',
        url: BASE_URL + `companies?${query}`
    })
    .then((response) => {
        // use the company id in the job record to create the relation

        if (response.data.data.length > 0) {

            job.attributes.company = response.data.data[0].id

            axios({
                method: 'post',
                url: BASE_URL + 'jobs', 
                headers: {
                    'Content-Type': 'application/json', 
                    Authorization: 'Bearer '+ JWT
                }, 
                data: {data: job.attributes}
            })
            .catch(error => {
                console.log("ERROR! job", job.id, job.attributes.company, error.message)
            })
        } else {
            console.log("Error creating job", job.id, " can't find company", companyName)
        }
        
    })

}

/* 
 * upload one company record via the API
 */
const uploadCompany = async (company) => {

    await axios({
        method: 'post',
        url: BASE_URL + 'companies', 
        headers: {
            'Content-Type': 'application/json', 
            Authorization: 'Bearer '+ JWT
        }, 
        data: {data: company.attributes}
    })
    .catch(error => {
        console.log("ERROR! company", company.id, error.message)
    })
}

// function to resolve a promise after a delay
const delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
} 

const uploadData = async (sampleData) => {

    /* Login and process the data */
    await login('bob', 'bobalooba')

    clearData('job-applications')

    await clearData('companies')
    .then(async () => {
        console.log("Creating companies")
        sampleData.companies.forEach(async (company)  => {
            await uploadCompany(company) 
        })


        await clearData('jobs')
        .then(() => {
            console.log("Creating jobs")
            sampleData.jobs.forEach(async (job) => {
                await uploadJob(job)
            })
        })

    })   
}


/* Read and parse the JSON data */
const jsonFileName = 'frontend/src/sample-data.json'
console.log(`Loading data from ${jsonFileName}`)
const rawData = fs.readFileSync(jsonFileName)
const data = JSON.parse(rawData)
uploadData(data)
.then(() => {
    console.log("Done creating sample data")
})