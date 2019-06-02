<template>
  <div class="avatar" :class="classes">
    <div class="avatar__letter" v-if="!hideLetter">
      <LetterAvatar
        :name="name"
        @click="onClick"
        :rounded="rounded"
        :fg-color="fgColor"
        :bg-color="bgColor"
        :bg-color-palette="bgColorPalette"
      />
    </div>
    <transition name="fade">
      <div
        class="avatar__image"
        :class="{ 'avatar__image--initial': hideLetter }"
        v-if="showImage"
      >
        <img :src="url" :alt="name" width="100%" @click="onClick" />
      </div>
    </transition>
  </div>
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
  computed: {
    classes() {
      return { "avatar--rounded": this.rounded };
    },
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
    },
  },
  watch: {
    url: {
      handler(value) {
        if (!value) {
          return;
        }

        const img = new Image();
        img.onload = () => {
          this.showImage = true;

          setTimeout(() => {
            this.hideLetter = true;
          }, 500);
        };

        img.src = value;
      },
      immediate: true,
    },
  },
  data() {
    return {
      showImage: false,
      hideLetter: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 100%;
  position: relative;
  display: inline-block;

  &__letter {
  }
  &__image {
    position: absolute;
    top: 0;

    &--initial {
      position: initial;
    }

    img {
      display: block;
    }
  }
  &--rounded {
    border-radius: 50%;
    img {
      border-radius: 50%;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
