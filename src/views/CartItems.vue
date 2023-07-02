<template>
  <nav>
    <div>
      <router-link to='/'><button><i class="material-icons">arrow_back</i>Continue Shoppping</button></router-link>
    </div>
    <div>
      <button>Login <i class="material-icons">login</i></button>
    </div>
  </nav>
  <main>
    <div class="cart-container">
      <div class="cart-title">
        <h2>Shopping Cart</h2>
      </div>
      <div class="cart-list">
        <div class="cart-list-nav">
          <div id="titles">
            <h5>Product</h5>
          </div>
          <div>
            <h5>Quantity</h5>
          </div>
          <div>
            <h5>Price</h5>
          </div>
        </div>
        <div class="cart-list-item" v-for="item in cart.cart" :key="item.id">
         
           <div id="title">
            <img :src="item.image" :alt="item.title" />
            <h4>{{item.title.substring(0,15)+'..'}}</h4>
          </div>
          <div>
            <input type="number" value="1" />
          </div>
          <div>
            <p>{{item.price}} $</p>
          </div>
          <div>
            <i class="material-icons" @click="handleSubmit(item.id)">delete</i>
          </div>
        </div>
         
      </div>
      <div class="oreder-summary">
        <div>
          <h3>Oreder Summary</h3>
        </div>
        <div>
          <p>Quantity</p>
          <p>7</p>
        </div>
        <div>
          <p>Shipping</p>
          <p>30$</p>
        </div>
        <div>
          <p>Total amount</p>
          <p>300$</p>
        </div>
        <div>
          <button>Go to chekout</button>
        </div>
      </div>
      <div class="form-shipping">
        <div class="form-title">
          <h3>Billing address</h3>
        </div>
        <form>
          <div class="first-name">
            <label for="first">First Name</label>
            <input
              type="text"
              name="first"
              placeholder="First name..."
              required
            />
          </div>
          <div class="last-name">
            <label for="second">Last Name</label>
            <input
              type="text"
              name="second"
              placeholder="Last name..."
              required
            />
          </div>
          <div class="email">
            <label for="email">Email</label>
            <input type="text" name="email" placeholder="Email..." required />
          </div>
          <div class="address">
            <label for="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address..."
              required
            />
          </div>
          <div class="country">
            <label for="country">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Country..."
              required
            />
          </div>
          <div class="state">
            <label for="state">State</label>
            <input type="text" name="state" placeholder="State..." required />
          </div>
          <div class="zip">
            <label for="zip">Zip code</label>
            <input type="text" name="zip" placeholder="Zip code..." required />
          </div>
          <div class="form-btn">
            <button>Continue to checkout</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { useCart } from '../stores/CartStore';
export default {
  setup(){
    const cart = useCart()

    const handleSubmit = (id)=>{
      cart.deleteItem(id)
    }


    return {
      cart,
      handleSubmit
    }
  }
};
</script>

<style scoped>
nav {
  width: 90%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 20px;
}

nav div button {
  margin: 0 10px;
  padding: 8px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  border-radius: 4px;
  border: none;
  background: #2f3e46;
  color: #fff;
  cursor: pointer;
}

nav div button i {
  vertical-align: middle;
  margin: 0 5px;
}

main {
  width: 100%;
  font-family: "Poppins", sans-serif;
}

.cart-container {
  margin: 20px 0;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 30px;
}

.cart-title {
  grid-column: span 3;
  padding: 10px;
  font-family: "Poppins", sans-serif;
  border-bottom: 1px solid #ddd;
  
}

.cart-list {
  grid-column: 1 / span 2;
}

.cart-list-nav{
  border-top: 1px solid #ddd;
}
.cart-list-item,
.cart-list-nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}
.cart-list-item div {
  display: grid;
  place-items: center;
  padding: 5px;
}

.cart-list-nav div {
  padding: 10px;
}

#titles {
  grid-column: 1 / span 2;
  text-align: start;
  padding: 10px;
}
#title {
  grid-column: 1 / span 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#title h4 {
  margin: 10px;
}

.cart-list-item div input {
  width: 40px;
  height: 40px;
  font-size: 18px;
}
input[type="number"] {
  /*for absolutely positioning spinners*/
  position: relative;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: inner-spin-button !important;

  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
}

.cart-list-item div img {
  width: 150px;
  height: 150px;
}

.cart-list-item div i{
  cursor: pointer;
}

/*oreder summary cart */

.oreder-summary {
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.oreder-summary div {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  width: 92%;
}

.oreder-summary div button {
  background: #3c6e71;
  border: none;
  padding: 5px;
  color: #fff;
  border-radius: 4px;
  width: 200px;
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  cursor: pointer;
}

/**/
.form-shipping {
  border: 1px solid #ddd;
  grid-column: 1 / span 3;
  border-radius: 4px;

}

.form-shipping form {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.form-shipping form div {
  padding: 10px;
  text-align: start;
}

.form-shipping form label {
  display: block;
}

.form-shipping form input {
  padding: 7px 10px;
  width: 92%;
  font-family: "Poppins", sans-serif;
  border: 2px solid #ddd;
  border-radius: 4px;
}

.form-shipping form input:focus {
  font-family: "Poppins", sans-serif;
  outline-color: #3c6e71;
}

.email,
.address,
.form-btn {
  grid-column: 1 / span 3;
}

.form-btn {
  border-top: 1px solid #ddd;
}
.form-btn button {
  display: block;
  margin: auto;
  width: 250px;
  padding: 10px;
  font-size: 1.2em;
  background: #3c6e71;
  border: none;
  color: #fff;
  border-radius: 4px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
}

@media screen and (max-width: 1050px) {
  .cart-container {
    grid-template-rows: 80px 1fr 430px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .cart-list {
    grid-column: 1 / span 3;
  }

  .form-shipping {

    grid-column: 2 / span 3;
  }

  .oreder-summary {
    grid-column-start: 1;
    grid-row-start: 3;

  }

  .form-shipping form input {
    width: 80%;
  }
}

@media screen and (max-width: 900px) {
  .cart-container {
    grid-template-rows: 80px 1fr 430px 430px;
    grid-template-columns: 1fr;
  }
  .cart-list {
    grid-column: 1 / span 3;
  }

  .form-shipping {
    grid-column: 1 / span 3;
  }

  .oreder-summary {
    grid-column: 1 / span 3;

  }
}

@media screen and (max-width: 670px) {
  .cart-list-item div img {
    width: 80px;
    height: 80px;
  }
  .form-shipping form input {
    width: 70%;
  }
}
@media screen and (max-width: 480px) {
  .cart-list-item div img {
    width: 60px;
    height: 60px;
  }
  .cart-container {
    width: 95%;
  }

  .cart-list-item div input {
    width: 28px;
    height: 28px;
    font-size: 16px;
  }
}
</style>