<template>
  <div class="letter-avatar" :class="classes" :style="styles">
    <img :src="url" :alt="name" width="100%" @click="onClick" />
  </div>
</template>

<script>
import avatarMixin from "../mixins/avatar";

export default {
  name: "VueLetterAvatar",
  mixins: [avatarMixin],
  props: {
    name: {
      type: String,
      required: true,
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
      canvas.width = this.canvasWidth;
      canvas.height = this.canvasHeight;
      let context = canvas.getContext("2d");

      context.fillStyle = this.bgColorValue;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = `bold ${this.fontSize}px Helvetica, Arial, sans-serif`;
      context.textAlign = "center";
      context.fillStyle = this.fgColor;
      context.fillText(
        this.initials,
        this.canvasWidth / 2,
        this.canvasHeight / 1.5
      );

      let uri = canvas.toDataURL();
      canvas = null;

      return uri;
    },
    classes() {
      return {
        "letter-avatar--rounded": this.rounded,
        "letter-avatar--block": this.block,
      };
    },
  },
  data() {
    const data = {
      canvasWidth: 500,
      canvasHeight: 500,
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

    data.fontSize = Math.ceil(data.canvasWidth / 2.2);

    return data;
  },
};
</script>

<style scoped lang="scss">
.letter-avatar {
  width: 100%;
  display: inline-block;
  font-size: 0;
  line-height: 0;

  img {
    display: inline-block;
  }

  &--rounded {
    border-radius: 50%;
    img {
      border-radius: 50%;
    }
  }
  &--block {
    width: 100%;
    height: 100%;
  }
}
</style>
