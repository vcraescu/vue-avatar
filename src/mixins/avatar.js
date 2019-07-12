export default {
  props: {
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
    block: {
      type: Boolean,
      required: false,
      default: false,
    },
    width: {
      type: [String, Number],
      required: false,
      default: 100,
      validator: validateSize,
    },
    height: {
      type: [String, Number],
      required: false,
      default: 100,
      validator: validateSize,
    },
  },
  computed: {
    stylesObject() {
      const styles = {};
      if (!this.block) {
        if (this.widthValue) {
          styles.width = this.widthValue;
        }

        if (this.heightValue) {
          styles.height = this.heightValue;
        }
      }

      return styles;
    },
    styles() {
      return Object.keys(this.stylesObject)
        .map(name => `${name}: ${this.stylesObject[name]}`)
        .join("; ");
    },
    widthValue() {
      if (!this.width) {
        return;
      }

      return sizify(this.width);
    },
    heightValue() {
      if (!this.height) {
        return;
      }

      return sizify(this.height);
    },
  },
};

function sizify(value) {
  if (typeof value === "number") {
    value = `${value}px`;
  }

  if (value.indexOf("px") > 0 || value.indexOf("rem") > 0) {
    return value;
  }

  return `${value}px`;
}

function validateSize(value) {
  if (typeof value === "number") {
    return true;
  }

  return (
    (value.indexOf("rem") > 0 || value.indexOf("px") > 0) &&
    !isNaN(parseInt(value))
  );
}
