<template>
  <div class="search-bar">
    <div>
      <input type="text" placeholder="Search product..." />
      <i class="material-icons">search</i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.search-bar {
  margin: auto;
  padding: 10px;
  font-family: "Poppins", sans-serif;
}

.search-bar div {
  margin: auto;
  width: 355px;
  height: 70px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  background: #264653;
}

.search-bar div input {
  width: 80%;
  margin-top: 17px;
  padding: 10px;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  border-radius: 4px;
}
.search-bar div i {
  vertical-align: middle;
  cursor: pointer;
  color: white;
  font-size: 28px;
  margin: 5px;
}

@media screen and (max-width: 375px) {
  .search-bar {
    padding: 0;
  }
  .search-bar div {
    width: 320px;
    height: 60px;
  }
  .search-bar div input {
    width: 72%;
    margin-top: 10px;
    padding: 10px;
    border: none;
    outline: none;
    font-family: "Poppins", sans-serif;
    border-radius: 4px;
  }

  .search-bar div i {
    margin: 10px;
  }
}
</style>