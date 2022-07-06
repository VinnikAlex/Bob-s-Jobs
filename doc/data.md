# Data Description

This application will manage data about Jobs, Companies and Job Applications.  

## Sample Data

You are
provided with a JSON file containing sample data for each of these:
[sample-data.json](frontend/sample-data.json).  For levels 1 and 2 you will just
use the data in this JSON file directly (loaded via fetch).   You should
not modify the data in any way as it will be used for testing.

The fields in each type of data are as follows.

### Job

A Job is a listing on the jobs board describing a job opening for a particular company. 

* `id` - a unique integer identifier for the job
* `title` - text title for the job
* `description` - html formatted long-form description of the job
* `location` - textual location of the job, eg. Sydney, Work from home
* `type` - job type, eg. Part Time, Full Time
* `company` - relation with Company, the company offering this job
* `publishedAt` - timestamp recording when the job was published

Note that there are also `createdAt` and `updatedAt` timestamp fields, we 
won't make use of these.

### Company

A company is an organisation offering one or more jobs. 

* `id` - a unique integer identifier for the company
* `name` - text field name of the company
* `url` - URL of the company website
* `logo` - URL of the company logo (if available)
* `jobs` - relation with Job, the jobs offered by the company


## Strapi Database

When you introduce
the Strapi server, you will load the sample data into the Strapi database. In
addition you will use two more models as described below.

To import the sample data into Strapi we have provided a scripts (`uploadData.js`)
which you can call by running:

```shell
npm run sampledata
```

from the main project directory.  Note that the job and company `id` fields
will change each time you import as Strapi assigns those itself.

### User

A user in the system. Note that this data will be provided by Strapi when you start using
that as your backend (Level 3).  The fields of interest in User for us are:

* `username` - text field, the user name in the system
* `email` - the (unique) user email address

### Job Application

A job application is completed by a User to apply for a particular Job.  

* `id` - a unique integer identifier for the application
* `user` - relation with User (from: `users-permissions`), the user applying for the job
* `job` - relation with Job, the job applied for
* `text` - the text of the job application letter

