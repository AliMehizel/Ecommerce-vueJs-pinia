<template>
  <div class="links" v-if="!show">
    <div class="links-left">
      <router-link to='/'><a href="#">Home</a></router-link>
      <div class="dropdown">
        <a href="#">Categories <i class="material-icons">expand_more</i></a>
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
      <router-link to="/cart"><button>Cart <i class="material-icons">shopping_cart</i></button></router-link>
    </div>
  </div>

</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;1,400&display=swap");
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
  background-image: url("../assets/b.png");
  object-fit: contain;
  background-size: contain, cover;
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.intro-section div {
  font-family: "Poppins", sans-serif;
  padding: 60px 50px;
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
  height: 40px;
  font-size: 1.2em;
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
  font-size: 0.9em;
  padding: 5px;
  margin: 5px;
  font-family: "Poppins", sans-serif;
  border: none;
  border-radius: 5px;
  transition: 0.5s tranform;
  cursor: pointer;
  color: #fff;
    background: #2f3e46;
  word-spacing: 5px;
}

.links-right button:hover {
  transform: scale(0.96);
}

.links-right i {
  vertical-align: middle;
  margin: 0 5px;
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

@media screen and (max-width: 900px) {
  .links {
    transform: translate(100%);
    display: none;
    opacity: 0;
  }
  .links-left,
  .links-right {
    display: none;
  }
}
</style>