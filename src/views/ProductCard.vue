<template>
  <div class="product-cart">
    <img :src="product.image" alt="" />
    <div>
      <h2>{{ product.title.substring(0, 25) }}</h2>
      <p>{{ product.description.substring(0, 100) + "..." }}</p>
      <strong
        ><span>{{ product.price }} $</span></strong
      >
    </div>
    <button @click="handleSubmit(product)">Add To Cart <i class="material-icons">add_shopping_cart</i></button>
  </div>
</template>

<script>
import {useCart} from '../stores/CartStore'
export default {
  props: ["product"],
  setup(){
    const cartStore = useCart()
    const handleSubmit =(item)=>{
      cartStore.addItem(item)
    }

    return {handleSubmit}
  }
};
</script>

<style>
.product-cart {
  border: none;
  border-radius: 6px;
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: "Poppins", sans-serif;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s;
  cursor: pointer;
}
.product-cart img {
  padding: 10px;
  height: 200px;
  width: 200px;
}
.product-cart div h2 {
  margin: 0 10px;
}
.product-cart div p {
  letter-spacing: 1px;
  margin: 10px;
}

.product-cart button i {
  vertical-align: middle;
}

.product-cart button {
  font-family: "Poppins", sans-serif;
  background: #354f52;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.5s;
}
.product-cart button:hover,
.product-cart:hover {
  transform: scale(0.98);
}
@media screen and (max-width: 700px) {
  .product-cart {
    width: 300px;
    height: 450px;
  }
  .product-cart img {
    padding: 10px;
    height: 180px;
    width: 180px;
  }
  .product-cart div h2 {
    font-size: 1.3em;
  }
  .product-cart div p {
    font-size: 0.9em;
  }
}


</style>