<template>
  <img
    class="avatar"
    :class="classes"
    v-if="showImage"
    :src="url"
    :alt="name"
    width="100%"
    @click="onClick"
  />
  <LetterAvatar
    v-else
    :name="name"
    @click="onClick"
    :rounded="rounded"
    :fg-color="fgColor"
    :bg-color="bgColor"
    :bg-color-palette="bgColorPalette"
  />
</template>

<script>
import LetterAvatar from "./LetterAvatar";

export default {
  name: "VueAvatar",
  components: { LetterAvatar },
  props: {
    url: {
      type: String,
      required: false,
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false,
    },
    fgColor: {
      type: String,
      required: false,
      default: "#fff",
    },
    bgColor: {
      type: String,
      required: false,
      default: null,
    },
    bgColorPalette: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  created() {
    this.tryLoadImage();
  },
  computed: {
    classes() {
      return { "avatar--rounded": this.rounded };
    },
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
    },
    tryLoadImage() {
      if (!this.url) {
        return;
      }

      const img = new Image();
      img.onload = () => {
        this.showImage = true;
      };

      img.src = this.url;
    },
  },
  data() {
    return {
      showImage: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 100%;

  &--rounded {
    border-radius: 50%;
  }
}
</style>
