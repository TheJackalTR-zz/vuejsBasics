window.addEventListener("load", () => {
  window.vue = new Vue({
    el: "#app",
    data: {
      message: "<h1>Hello World</h1>",
      anotherMessage: 'Hello Universe!',
      isLoggedIn: true,
      username: 'Aryen'
    }
  });
});