<template>
  <div id="app">
    <div style="width: 100px;">
      <VueAvatar name="John Doe" />
      <VueAvatar name="Michal Appleseed" rounded />
      <VueAvatar name="Arthur Smith" rounded :url="avatarUrl1" />
      <VueAvatar
        name="Francis Underwood"
        block
        rounded
        url="https://i.pravatar.cc/300?img=6"
      />
    </div>
    <div style="width: 150px;">
      <VueAvatar
        rounded
        block
        name="Marlyn Monroe"
        url="https://i.pravatar.cc/300?img=10"
      />
    </div>
    <div style="width: 150px;height: 150px;">
      <VueAvatar
        rounded
        block
        name="Oracle"
        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Zc3LMQy1QIpsYpt0wKigaj8_iNOROwuMvZjS3kns4UMkPKh-Qg"
      />
    </div>
    <VueAvatar
      rounded
      width="5rem"
      height="5rem"
      name="Oracle"
      url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Zc3LMQy1QIpsYpt0wKigaj8_iNOROwuMvZjS3kns4UMkPKh-Qg"
    />
    <VueLetterAvatar rounded width="5rem" height="5rem" name="John Doe" />
    <div style="width: 150px;height: 150px">
      <VueLetterAvatar rounded block name="John Doe" />
    </div>
  </div>
</template>

<script>
import VueAvatar from "@/components/Avatar";
import VueLetterAvatar from "@/components/LetterAvatar";

export default {
  name: "app",
  components: { VueLetterAvatar, VueAvatar },
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
