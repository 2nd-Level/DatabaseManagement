# DatabaseManagement# Node DB 2 Module Challenge

In this challenge, you will write an API that can be used to manage _Cars_ stored in a Relational Database.

## Project Set Up

Follow these steps for starting your project.

- [ ] Import (NOT FORK) this repository into your account and **clone your version**.
- [ ] Add your project manager as collaborator on your repository.
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into master (student's Repository). **Please don't merge your own pull request**
- [ ] Add your project manager as a reviewer on the pull-request
- [ ] Your project manager will count the project as complete by merging the branch back into master.

## Minimum Viable Product

- Using `knex migrations`, design and write a schema for the `cars` table using the specifications below.
- Configure `knex` to connect to a `/data/car-dealer.db3` database using the `sqlite3` npm module.
- Write endpoints to support `CREATE` and `READ` operations on the `cars` resource.
- Use a rest client like _Insomnia_ or _Postman_ to test your API.

## Specifications

The client for this API is a car dealer who has provided the following specs:

- The critical information for each car is the VIN, make, model, and mileage.
- They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

## Stretch Problems

- Add seed data to the database using `knex seeds`
- Add `UPDATE` and `DELETE` operations to your API.
- Write a schema file for a `sales` table. This table should track information on the sale of each car. You may wish to research `foreign keys` in order to link each sale to the entry in `cars` which sold.













**DEPENDENCIES**
    * npm i express knex sqlite3 helmet
    - EXPRESS
    - KNEX
    - SQLITE3
    - HELMET 
    * npm install --save-dev nodemon
    - NODEMON

1. npm install knex sqlite3
2. knex init
3. Configure knexfile.js
4. added data and cars folders
5. In the cars folder add a cars router file and the code for the router file with a get request
6. add api folder and add server.js file and in it add the code to creat and export server **WEEK1**
6. add index.js file in root of project and add code for the server to listen**WEEK1**
    - make sure server and start scripts are configured 
***server should be able to start now***

7. if a db file was created delete it
8. add migration object to knexfile.js
9. knex migrate:make something
    - if you do not have knex installed globally add npx in fron of knex
10. create schema **no spaces in the column names**
11.knex migrate:latest
12. npm start, you should be able to get some data or an empthy array back

**ADDING DATA WITH SEEDS**

13. knex seed:make 00
14. Inside the seed file add table name abd change .del() to .turncate()
15. add data to add to database
16. knex seed:run