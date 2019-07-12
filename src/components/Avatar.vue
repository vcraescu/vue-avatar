<template>
  <div class="avatar" :class="classes" :style="styles">
    <div class="avatar__letter" v-if="!showImage">
      <LetterAvatar
        :name="name"
        @click="onClick"
        :rounded="rounded"
        :block="block"
        :width="width"
        :height="height"
        :fg-color="fgColor"
        :bg-color="bgColor"
        :bg-color-palette="bgColorPalette"
      />
    </div>
    <transition name="fade">
      <div
        class="avatar__image"
        :class="{ 'avatar__image--initial': showImage }"
        v-if="showImage"
      >
        <img :src="url" :alt="name" width="100%" @click="onClick" />
      </div>
    </transition>
  </div>
</template>

<script>
import avatarMixin from "../mixins/avatar";
import LetterAvatar from "./LetterAvatar";

export default {
  name: "VueAvatar",
  mixins: [avatarMixin],
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
  },
  computed: {
    classes() {
      return { "avatar--rounded": this.rounded, "avatar--block": this.block };
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
        };

        img.src = value;
      },
      immediate: true,
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
  position: relative;
  font-size: 0;
  line-height: 0;
  overflow: hidden;
  display: inline-flex;
  align-items: center;

  &__letter {
  }
  &__image {
    position: absolute;
    top: 0;

    &--initial {
      position: initial;
    }

    img {
      display: inline-block;
    }
  }
  &--rounded {
    border-radius: 50%;
  }
  &--block {
    width: 100%;
    height: 100%;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
