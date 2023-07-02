<template>
  <Header />
  <SearchBar />
  <main>
    <nav class="nav-btn">
      <button @click="items = null">All</button>
      <button @click="filterItem('men\'s clothing')">Men's Clothing</button>
      <button @click="filterItem('women\'s clothing')">Women's Clothing</button>
      <button @click="filterItem('jewelery')">Jawelery</button>
      <button @click="filterItem('electronics')">Electronics</button>
    </nav>
    <div class="product-container" v-if="!items">
      <div v-for="product in productStore.products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>

    <div class="product-container" v-if="items">
      <div v-for="product in items" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>

    <div class="loading" v-if="productStore.loading">
      <strong><h3>Loading...</h3></strong>
    </div>
  </main>

  <Footer />
</template>

<script >
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { ref } from "vue";
import SearchBar from "../components/SearchBar.vue";
import { useProductStore } from "../stores/ProductStore";
import ProductCard from "./ProductCard.vue";
export default {
  components: { SearchBar, ProductCard, Header, Footer },
  setup() {
    const productStore = useProductStore();
    productStore.getProduct();

    const items = ref(null);

    const filterItem = (ctgr) => {
      items.value = productStore.products.filter(
        (product) => product.category === ctgr
      );
      return items.value;
    };

    return {
      productStore,
      items,
      filterItem,
    };
  },
};
</script>

<style>
main {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}

.nav-btn {
  max-width: 1200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.nav-btn button {
  margin: 5px 10px;
  width: auto;
  padding: 10px;
  font-family: "Poppins", sans-serif;
  background: #3c6e71;
  color: #ffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.4s transform;
}

.nav-btn button:hover {
  transform: scale(0.98);
}
.product-container {
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding: 100px;
}

.loading {
  text-align: center;
  width: 100%;
  height: 100px;
  margin-bottom: 100px;
}

.loading h3 {
  font-size: 40px;
  font-family: "Poppins", sans-serif;
}

@media screen and (max-width: 1200px) {
  .product-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 900px) {
  .product-container {
    grid-template-columns: 1fr;
  }
}
</style>