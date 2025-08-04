const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');
require('dotenv/config');


app.use(cors());
app.options('*', cors());

const api = process.env.API_URL;



//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use(errorHandler);   
app.use('/public/upload', express.static(__dirname + '/public/upload'));

//routers
const productRouter = require('./routers/product_router');          // Router for products like products information, product details, etc.
const categoriesRouter = require('./routers/categories_router');    // Router for main categories that products belong to.
const usersRouter = require('./routers/users_router');              // Router for user management, including registration and profile updates.  
const ordersRouter = require('./routers/orders_router');            // Router for managing orders, including order creation and status updates.
const authorsRouter = require('./routers/authors_router');          // Router for query book belong to one author
const subcategoryRouter = require('./routers/subCategory_router');  // Router for subcategories that products belong to, allowing for more specific categorization.
const userAuthRouter = require('./routers/userAuthRouter');         // Router for user authentication, including login and token management, use jwt.
const orderItems = require('./routers/order-items');                // Router for managing items within an order, allowing for detailed order item management.
const searchRouter = require("./routers/search_router");            // Router for search functionality, enabling users to find products based on various criteria.


app.use(`${api}/products`, productRouter);
app.use(`${api}/categories`, categoriesRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/orders`, ordersRouter);
app.use(`${api}/authors`, authorsRouter);
app.use(`${api}/subcategories`, subcategoryRouter);
app.use(`${api}/auth`, userAuthRouter);
app.use(`${api}/search`, searchRouter);
app.use(`${api}/order-items`, orderItems);

mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log('Database connection is ready');
})
.catch((err) => {
    console.log(err);
})

app.listen(3000, () => {
    console.log('server is running http://localhost:3000');
})