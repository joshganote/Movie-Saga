# Movie Saga

## Description
Duration: 3 days

In this project we will be looking at how we can use sagas and generator functions to take axios calls out of component files and into our index.js file where we can later consolidate into a file for each saga. Saga functions are a great way to clean up component files. Since axios calls are all done at a global level we can put them in there own file make our code easier to navigate.

## Database Setup
1. created a database named saga_movies_weekend
2. Use the queries located in database.sql in the saga_movies_weekend database.
3. After all initial queries have been run, and you have a movies and genres table, use the junction table query.
4. Then use the default data entries I have provided towards the bottom of database.sql.

## Install Dependencies (in terminal)
1. npm install
2. npm run server
3. npm run client

## Usage

To use this application, follow these steps;

1. On the home page there is only one thing you can do. Scroll until you find a movie you like and then click on the movie poster image.
2. On the next page you can review the title, description, and all associated genres with that movie. 
4. You can either go back to the list of movies on the homepage by click the 'go back' button, or go to the edit page by clicking the 'edit' button
5. In the edit page you can add your own title and description.
6. You can clear out your field by clicking cancel, or submit the change by clicking 'save'.
7. The 'save' button will take you back to the second page, where you can review the change.
8. Click the 'go back' button and repeat the process.

## Built With
- React
- Redux
- Sagas
- Axios
- REST api
- Node Modules
- PostgresSQL
- Postico
- Postman

## Acknowledgement

Thanks to Prime Digital Academy in Kansas City who equipped and helped me to make this application a reality.

## Support

if you would to give your own feedback to me, please email me at j.ganote0825@gmail.com