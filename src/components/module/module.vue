<template>
  <div class="module">
    <div class="header">
      <div class="header_index">
        <div class="title">
          <span class="colorBlock"></span>
          <slot></slot>
        </div>
        <div class="tooltip">
          <slot name="tooltip"></slot>
        </div>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
</style>
