<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
      <router-link class="navbar-brand" to="/Test_Task_vLibrary/">vTable</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li  class="nav-item">
              <router-link class="nav-link" to="/Test_Task_vLibrary/">
              Таблица пользователей
             
              </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
</style>
