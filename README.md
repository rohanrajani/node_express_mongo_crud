# node_express_mongo_crud boilerplate demo 
Basic CRUD operations with node, express and mongodb

To getting start with **MEN**(Mongo-Express-Node) **CURD**(Create-Update-Read-Delete) this repository can be used as a kick start. 

# How To Run?

(1) Clone this git repo to the system
(2) Run command `npm install` to the project root directory
(3) Run command `npm start` to the project root directory

Bingo!! Your project is up on "**http://localhost:9999**"

# API end-points

(1) Create User:
    URL: *base_url/user/addUser*
    Request Type: *POST*
    Params: *name,user,email*

(2) Get All Users:
    URL: *base_url/user/getuser/all*
    Request Type: *GET*

(3) Get User By Email:
    URL: *base_url/user/getuser/:email*
    Request Type: *GET*

(4) Update User:
    URL: *base_url/user/updateuser/:userId*
    Request Type: *PATCH*
    Params: *name,user,email*

(5) Delete User:
    URL: *base_url/user/deleteuser/:userId*
    Request Type: *DELETE*

Enjoy Coding!

Write to me on **rajanirohan@gmail.com**   