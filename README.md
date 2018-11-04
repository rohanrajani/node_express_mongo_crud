# node_express_mongo_crud boilerplate demo 
Basic CRUD operations with node, express and mongodb

To getting start with **MEN**(Mongo-Express-Node) **CURD**(Create-Update-Read-Delete) this repository can be used as a kick start. 

# How To Run?

(1) Clone this git repo to the system<br />
(2) Run command `npm install` to the project root directory<br />
(3) Run command `npm start` to the project root directory<br />

Bingo!! Your project is up on "**http://localhost:9999**"

# API end-points

(1) Create User:<br /><br />
    **URL:** *base_url/user/addUser*<br />
    **Request Type:** *POST*<br />
    **Params:** *name,user,email*<br />

(2) Get All Users:<br /><br />
    **URL:** *base_url/user/getuser/all*<br />
    **Request Type:** *GET*<br />

(3) Get User By Email:<br /><br />
    **URL:** *base_url/user/getuser/:email* <br />
    **Request Type:** *GET* <br />

(4) Update User:<br /><br />
    **URL:** *base_url/user/updateuser/:userId* <br />
    **Request Type:** *PATCH* <br />
    **Params:** *name,user,email* <br />

(5) Delete User: <br /><br />
    **URL:** *base_url/user/deleteuser/:userId* <br />
    **Request Type:** *DELETE* <br />

Enjoy Coding!

Write to me on **rajanirohan@gmail.com**   