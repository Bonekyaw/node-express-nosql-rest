### This is Simple Express Starter Kit

##### Node express + Mongoose ODM ( Mongodb ) + REST api 

You can use it for your project. If it is useful for you,
don't forget to give me a GitHub star, please.

In this node/express template

   - Express framework
   - NoSQL - Mongodb
   - Mongoose ODM
   - RESTful api
   - JWT auth
   - bcrypt
   - express-validator 
   - error handler 
   - file uploading etc.

In order to use it,

Create a .env file and add this.  
For Mongodb Atlas

```
MONGO_URL="mongodb+srv://<username>:<password>@cluster0.ropxgna.mongodb.net/lucky?retryWrites=true&w=majority"
TOKEN_SECRET="should something hard to read"

```

For Local Mongodb server

```
MONGO_URI="mongodb://127.0.0.1/lucky"
TOKEN_SECRET="should something hard to read"


```
Please note.   
*TOKEN_SECRET* should be complex and hard to guess.  

If you use file uploading feature in this kit,  
create nested folders `uploads/images` in the root directory.  
But making directories is up to you. You can configure in `middlewares/uploadFile.js`.  
For large projects, it is the best solution to use aws S3, DigitalOcean space, etc., instead of using file system.  

After git clone, it should be run.

```
npm install
npm start

```  

If you have something hard to solve,
DM  
<phonenai2014@gmail.com>  
<https://www.facebook.com/phonenyo1986/>  
<https://www.linkedin.com/in/phone-nyo-704596135>  

#### Find more other Starter kits of mine ?   

`My Kits For REST Api`
  
  [Express + Prisma ORM + mongodb - rest api](https://github.com/Bonekyaw/node-express-prisma-mongodb)  
  [Express + Prisma ORM + SQL - rest api](https://github.com/Bonekyaw/node-express-prisma-rest)  
  [Express + mongodb - rest api](https://github.com/Bonekyaw/node-express-mongodb-rest)  
  [Express + mongoose ODM - rest api](https://github.com/Bonekyaw/node-express-nosql-rest) - Now you are here  
  [Express + sequelize ORM - rest api](https://github.com/Bonekyaw/node-express-sql-rest)  

`My Kits For Graphql Api`

  [Apollo server + Prisma ORM + SDL modulerized - graphql api](https://github.com/Bonekyaw/apollo-graphql-prisma)  
  [Express + Prisma ORM + graphql js SDL modulerized - graphql api](https://github.com/Bonekyaw/node-express-graphql-prisma)  
  [Express + Apollo server + mongoose - graphql api](https://github.com/Bonekyaw/node-express-apollo-nosql)  
  [Express + graphql js + mongoose - graphql api](https://github.com/Bonekyaw/node-express-nosql-graphql)  
  [Express + graphql js + sequelize ORM - graphql api](https://github.com/Bonekyaw/node-express-sql-graphql)  



