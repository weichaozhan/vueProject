<template>
  <div class="gl-loading" ref="glLoading">
    <div class="loading">
      加载中
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlLoading',
  data () {
    return {
    };
  },
  mounted() {
    window.addEventListener('resize', this.resizeLoadingState)
    this.resizeLoadingState()
  },
  beforeDestroy() {
    window.removeEventListener('resize',this.resizeLoadingState)
  },
  methods: {
    /**
     * @description 窗口调整处理
     */
    resizeLoadingState() {
      this.$refs.glLoading.style.height = window.innerHeight + 'px'
    }
  }
}
</script>

<style lang="less" scoped>
.gl-loading {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 20px;
  } 
}
</style>