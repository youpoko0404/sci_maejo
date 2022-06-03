<template>
  <v-app id="app" data-app>
    <AdminMenu></AdminMenu>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AdminMenu from "./AdminMenu";

export default {
  name: "app",
  components: { AdminMenu },
};
</script>


