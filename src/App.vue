<template>
  <div id="app">
    <div style="width: 100px;">
      <VueAvatar name="John Doe" rounded />
      <VueAvatar name="Michal Appleseed" rounded />
      <VueAvatar name="Arthur Smith" rounded />
      <VueAvatar name="Francis Underwood" rounded />
    </div>
    <div style="width: 100px;">
      <VueAvatar
        rounded
        name="Marlyn Monroe"
        url="https://i.pravatar.cc/150?img=3"
      />
    </div>
  </div>
</template>

<script>
import VueAvatar from "@/components/Avatar";

export default {
  name: "app",
  components: { VueAvatar },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
