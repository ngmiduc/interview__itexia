<template>
  <router-view />
</template>

<script>
export default {
  name: "root"
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

h1,
h2,
h3,
h4,
h5,
h6,
p,
button,
li,
span,
input {
  font-family: "Source Code Pro", monospace;
  /* font-family: "Playfair Display", serif; */
  /* font-family: "Libre Caslon Display", serif; */
}

h1,
h2,
h3,
h4,
h5,
h6 {
  letter-spacing: 1px;
  background: rgb(49, 50, 49);
  padding: 8px 6px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(153, 151, 151, 0.95);
  transform: scale(0.99);
  color: rgb(236, 209, 234);
}

span {
  letter-spacing: 2px;
  font-size: 12px;
  font-weight: 400;
}
</style>
