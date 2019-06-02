<template>
  <div id="app">
    <div style="width: 100px;">
      <VueAvatar name="John Doe" />
      <VueAvatar name="Michal Appleseed" rounded />
      <VueAvatar name="Arthur Smith" rounded :url="avatarUrl1" />
      <VueAvatar
        name="Francis Underwood"
        rounded
        url="https://i.pravatar.cc/300?img=6"
      />
    </div>
    <div style="width: 150px;">
      <VueAvatar
        rounded
        name="Marlyn Monroe"
        url="https://i.pravatar.cc/300?img=10"
      />
    </div>
  </div>
</template>

<script>
import VueAvatar from "@/components/Avatar";

export default {
  name: "app",
  components: { VueAvatar },
  mounted() {
    setTimeout(() => {
      this.avatarUrl1 = "https://i.pravatar.cc/300?img=4";
    }, 500);
  },
  data() {
    return {
      avatarUrl1: null,
    };
  },
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
