# VAITrade Challenge
Build an API where a user can query the complexity of a text
segment.

## Tools

- Node: v13.8.0
- Express: 4.16.1
- MongoDB: v4.0.3

## Set-up

### To setup and run project

- run `npm install`
- run `npm run dev` to start server. Check out by going to localhost:8080

if you cannot run via bash console. Then you can
- npm install nodemon -g --save
- Edit the ~/.bashrc file in your home folder and add this line: export PATH=$PATH:~/npm
### Using Postman for validate API
- GET /
- POST /complexity
- POST /complexity?mode=verbose
*params types: x-www-form-urlencoded or raw JSON*
### Test
- run `npm test`.

## TODO

- Move non-lexical words to MongoDB. Create CRUD API for adding later.
- Improve lexicalDestiny method
- Add more test to the APIs
