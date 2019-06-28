<template>
  <div class="warper_module">
    <header>
      <div class="breadcrumb"><slot name="breadcrumb"></slot></div>
      <h3><slot name="title"></slot></h3>
      <div class="other">
        <slot name="form"></slot>
      </div>
    </header>
    <section>
      <slot></slot>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
</style>
