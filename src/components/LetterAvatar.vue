<template>
  <img
    :src="url"
    class="letter-avatar"
    :class="classes"
    :alt="name"
    width="100%"
    @click="onClick"
  />
</template>

<script>
export default {
  name: "VueLetterAvatar",
  props: {
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
  methods: {
    onClick(event) {
      this.$emit("click", event);
    },
  },
  computed: {
    initials() {
      let name = this.name ? String(this.name) : "";
      let parts = name.trim().split(" ");
      let initials = [];
      parts.forEach(part => {
        initials.push(part.charAt(0));
      });

      let text = initials
        .slice(0, 2)
        .join("")
        .toUpperCase();

      return text.length === 0 ? "?" : text;
    },
    bgColorIndex() {
      let code = 72;
      if (this.initials !== "?" && this.initials.length > 0) {
        code = this.initials.charCodeAt(0);
      }

      code -= 64;

      return code % this.bgColors.length;
    },
    bgColors() {
      if (this.bgColorPalette && this.bgColorPalette.length > 0) {
        return this.bgColors;
      }

      return this.defaultBgColorPalette;
    },
    bgColorValue() {
      return this.bgColor || this.bgColors[this.bgColorIndex - 1];
    },
    url() {
      let canvas = document.createElement("canvas");
      canvas.width = this.width;
      canvas.height = this.height;
      let context = canvas.getContext("2d");

      context.fillStyle = this.bgColorValue;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = `bold ${this.fontSize}px Helvetica, Arial, sans-serif`;
      context.textAlign = "center";
      context.fillStyle = this.fgColor;
      context.fillText(this.initials, this.width / 2, this.height / 1.5);

      let uri = canvas.toDataURL();
      canvas = null;

      return uri;
    },
    classes() {
      return { "letter-avatar--rounded": this.rounded };
    },
  },
  data() {
    const data = {
      width: 500,
      height: 500,
      defaultBgColorPalette: [
        "#e53935",
        "#d81b60",
        "#c51162",
        "#8e24aa",
        "#5e35b1",
        "#3949ab",
        "#1e88e5",
        "#0288d1",
        "#0097a7",
        "#00bfa5",
        "#00b8d4",
        "#00796b",
        "#2e7d32",
        "#558b2f",
        "#827717",
        "#9e9d24",
        "#f57f17",
        "#ff6f00",
        "#e65100",
        "#6d4c41",
        "#4e342e",
        "#616161",
        "#455a64",
        "#263238",
        "#ff80ab",
      ],
    };

    data.fontSize = Math.ceil(data.width / 2.2);

    return data;
  },
};
</script>

<style scoped lang="scss">
.letter-avatar {
  width: 100%;

  &--rounded {
    border-radius: 50%;
  }
}
</style>
