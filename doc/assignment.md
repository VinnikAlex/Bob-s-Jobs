<!-- @format -->

# COMP2110 Web Development Assignment

The task for the web development assignment this year is to build a job
listing web application. Your app will show a list of posited jobs, allow
users to search them and view job details, and then submit an application
for a job. This will be a simplified version of something like [Seek](https://seek.com.au) or [Glassdoor](https://glassdoor.com.au). The goal is to give you
experience in building a realistic web application within the confines of
this introductory unit.

The task is split into two parts: front-end and back-end. For the back end
we will use [Strapi](https://strapi.io) which makes it easy to set up a
database that provides a JSON based API. For the front end we'll write
Javascript code in the style that you've been developing in the workshops.

## Two Submission Points

There will be two submissions for this assignment. In the first (up to Level 2)
you will submit
some core functionality on the front-end using a dummy back-end. We will will
mark this using automated tests and provide you some feedback. The final submission
will include the full Strapi backend and include more advanced features.

## The Application

You will implement a web application that shows a list of jobs available, allows
users to search for relevant jobs, and apply for them. The application is
split into two parts: the front-end implemented in Javascript running in the
browser, and the back-end implemented by Strapi and running on your
desktop (the server).

The data we will use is structured as described in [Data Description](data.md).

We have split the description of the project into 'levels' with increasing
complexity and difficulty. The intention is that you should implement each
level in turn to complete the project. The first two levels **do not involve
the backend server** and will form
the first submission at the end of the mid-semester break. The third and fourth
levels require the backend Strapi server; you will integrate the front end with
this and extend the functionality to allow authentication and posting of jobs.

- [Levels 1 and 2](level1-2.md)
- [Levels 3 and 4](level3-4.md)

## Grading

### Functionality: Half-way Submission (5 marks)

- Auto marking: up to 5 marks (pass at least 10/12 tests); each test is worth
  0.5 marks for max of 5.

### Functionality: Final Submission (10 marks)

- Levels 3-4: passing auto-tests (5 marks)
- Extensions: well documented additional features or capabilities. Must be very clearly
  mentioned in the README.md file so that we know what you have done. (5 marks)

### Code Review (10 marks) - each is worth 2 marks

- README file describes each level, what was achieved, etc.
- Comments: (a) on the top of each function and each substantial piece of code
  and, (b) at the top of each file: module name, student name, and student number.
- Modularity: the project is structured according to the MVC framework: model.js,
  views.js, main.js at the very minimum contain: the data-, views- and the
  controller-related code respectively
- Readability: function names – easy to understand, consistent notation, i.e.
  camelCase used for all function names; suitable names are used.
- Readability: variable names – convey what is the variable supposed to do,
  consistent notation (e.g. user_name, or camelCase).

Note: Comments, function and variable names coupled with well-written
(structured) code are very important for code readability and maintainability.

### Design and Completeness (10 marks) - each is worth 2 marks

- Overall Appearance: there are no broken links; images are displayed properly,
  in proportion; fonts are easy to read, e.g., font is not too small/too large.
- Adjustability: Page size adjusts accordingly with smaller or wider screen size.
  Responsive web design is not required, just ensure your page displays properly
  with different screen sizes, i.e., when the user adjusts the page size, the page is
  rearranged and still presentable and usable.
- Browser Support: Displays well on different modern desktop browsers
  (e.g., Chrome, Firefox, Edge, and Safari).
- Structure of Pages: the page structure is clear, tidy, and easy to use.
- Aesthetics: Consistent color schema with attention to color combinations,
  e.g., background/foreground contrast (i.e. BG is not too busy). If you are interested,
  please read on color theory (link1, link2).
