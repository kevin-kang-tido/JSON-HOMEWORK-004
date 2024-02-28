
import { getData } from "../store/fetchAPI.js";
import { cardProduct } from "../components/cardProduct.js";
import {cardUser} from"../components/cardUser.js"

const renderTocardProduct = document.getElementById("product_id");
const renderTocardUser = document.getElementById("user_id");


const products = await  getData("products");
const users= await getData("users");

console.log("Here product data ; ",products);
console.log("Here is the data of user : ",users)

// const users = await getData('users');
products.map((product)=>{
    renderTocardProduct.innerHTML += cardProduct(product);
});

// set user card
users.map((user)=>{
    renderTocardUser.innerHTML += cardUser(user);
});





