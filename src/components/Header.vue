<template>
  <header>
    <nav class="nav-container">
      <h1>Shopping</h1>
     
        <div class="links" :id="show ? 'active': '' ">
          <div class="links-left" >
            <a href="#">Home</a>
            <div class="dropdown">
              <a href="#"
                >Categories <i class="material-icons">expand_more</i></a
              >
              <div class="dropdown-content">
                <a href="#">One</a>
                <a href="#">Two</a>
                <a href="#">Three</a>
              </div>
            </div>
            <a href="#">About</a>
          </div>

          <div class="links-right">
            <button>Login <i class="material-icons">login</i></button>
            <button>Signup <i class="material-icons">person_add</i></button>
            <router-link to='cart'><button>Cart <i class="material-icons">shopping_cart</i></button></router-link>
          </div>
        </div>
      

    
      <div class="menu-div">
       <router-link to="cart"><button class="cart-icons"><i class="material-icons">local_mall</i></button></router-link> 
        <button  class="menu" @click="toggleMenu">
        
        <i class="material-icons">menu</i>
        </button>
      </div>
    </nav>
    <section class="intro-section">
      <div>
        <h1>50% Off For Your First Shopping</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          aut sed. Ipsa nam id facilis.
        </p>
        <button>Shop Now</button>
      </div>
    </section>
  </header>
</template>

<script>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  setup() {
    //const name = ref('')
    const show = ref(false);
    const toggleMenu = ()=>{
      show.value = !show.value
    }
    return { show,toggleMenu };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;1,400&display=swap");
header{
  width: 100%;
}
.nav-container {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  display: flex;
  padding: 10px 20px;
  margin: auto;
  align-items: center;
  max-width: 1200px;
  font-family: "Poppins", sans-serif;
}

.intro-section {
  height: 70vh;
  width: 100%;
  background-image: url("../assets/b.png");
  background-size: contain, cover;
  background-repeat: no-repeat;
  background-position-x: right;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
}

.intro-section div {
  font-family: "Poppins", sans-serif;
  padding: 40px;
  margin: 100px 0 0;
  max-width: 400px;
  height: auto;
  animation: animate 2s ease-in-out;
  text-align: start;
}

@keyframes animate {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

.intro-section div h1 {
  font-size: 2em;
}
.intro-section div p {
  margin: 15px 0;
}

.intro-section button {
  width: 180px;
  padding: 10px;
  font-size: 1.1em;
  font-family: "Poppins", sans-serif;
  border: none;
  border-radius: 6px;
  background: #2f3e46;
  color: #fff;
  cursor: pointer;
  transition: 0.3s transform;
}
.intro-section button:hover {
  transform: scale(0.94);
}

.links {
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  width: 100%;
}
.links-left {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
}

.links-left a {
  text-decoration: none;
  color: #444;
  word-spacing: 5px;
}

.links-left a i {
  vertical-align: middle;
}

.links-right button {
  width: 120px;
  height: 35px;
  margin: 5px;
  font-size: 1em;
  font-family: "Poppins", sans-serif;
  border: none;
  border-radius: 5px;
  transition: 0.5s tranform;
  cursor: pointer;
  color: #fff;
  background: #023047;
  word-spacing: 5px;
}

.links-right button:hover {
  transform: scale(0.96);
}

.links-right i {
  vertical-align: middle;
}

.dropdown {
  position: relative;
}
.dropdown-content {
  display: none;
  position: absolute;
  top: 25px;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  border-radius: 8px;
}

.dropdown:hover .dropdown-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.dropdown-content a {
  display: block;
}

.menu-div{
  display: none;
}
.menu {
  display: none;
  border: none;
  background: transparent;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.menu i {
  font-size: 40px;
  vertical-align: middle;
}

@media screen and (max-width: 900px) {
  .intro-section {
    height: 100vh;
    background-image: url("../assets/b.png");
    background-size: contain, cover;
    background-position: bottom;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .nav-container {
    justify-content: space-between;
    height: 8vh;
    padding: 0 15px;
    background: rgba(0, 0, 0, 0.5);
  }

 

  .nav-container h1{
    color: #fff;
  }
  .links {
    position: absolute;
    right: 0;
    top: 8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 92vh;
    background: rgba(0, 0, 0, 0.5);
    transform: translateX(100%);
    transition: all 0.6s ease-in-out;
    opacity: 0;
  }
  #active{
    transition: all 0.6s ease-in-out;
    transform: translate(0%);
    opacity: 1;
  }
  .links-left{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 50%;
    color: #000;
    
  }
  .links-right {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 30%;
    color: #000;
  }
  .links-left a {
    text-decoration: none;
    color: #fff;
    word-spacing: 5px;
  }

  .links-left div div a {
    color: #000;
  }
  .menu-div{
    display: block;
    width: 150px;
    
  }
  .menu {
    display: inline;
  }
  .cart-icons{
    font-size: 40px;
    color: #ffff;
    border: none;
    background: transparent;
    vertical-align: middle;
    margin: 0 15px;
    cursor: pointer;
  }

  .menu i{
    color:  #fff;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
}
@media screen and (max-width: 750px){
  .intro-section{
    height: 90vh;
  }

  .intro-section div h1{
    font-size: 1.5em;
  }
  .intro-section div p{
    font-size: 0.9em;
  }
  .intro-section div button{
    padding: 5px;
    width: 120px;
  }
} 
@media screen and (max-width: 550px){
  .intro-section{
    height: 75vh;
  }
} 
</style>