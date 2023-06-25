<template>
  <span
    v-if="shape === 'point'"
    class="tag-point-container"
    @click="handleClick"
  >
    <span :class="[...classes, `el-tag--${shape}`]"></span>
    <span :class="['el-tag', 'el-tag__text']">
      <slot />
    </span>
    <span v-if="closable" :class="[...classes, `el-tag--${shape}__close`]">
      <i :class="['el-tag__close', 'el-icon-close']" @click="handleClose"></i>
    </span>
  </span>
  <e-tag v-else v-bind="{ ...$props, ...$attrs }">
    <slot />
  </e-tag>
</template>

<script>
import { Tag } from "element-ui";

export default {
  name: Tag.name || "ElTag",
  components: {
    ETag: Tag,
  },
  extends: Tag,
  props: {
    ...Tag.props,
    shape: {
      type: String,
      default: "",
    },
  },
  computed: {
    classes({ type, tagSize, hit, effect }) {
      return [
        "el-tag",
        type ? `el-tag--${type}` : "",
        tagSize ? `el-tag--${tagSize}` : "",
        effect ? `el-tag--${effect}` : "",
        hit && "is-hit",
      ];
    },
  },
};
</script>

<style lang="less" scoped>
.tag-point-container {
  display: inline-flex;
  align-items: center;
  .el-tag {
    padding: 0;

    &--point {
      width: 8px;
      height: 8px;

      &__close {
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;
      }
    }

    &__text {
      background-color: transparent;
      border: none;
      margin: 0 8px;
    }

    .el-icon-close {
      position: static;
    }
  }
}
</style>
