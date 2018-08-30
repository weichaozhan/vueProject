<template>
  <div>
    <canvas id ="canvas" width="500" height="500">
    </canvas>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  components: {
  },
  mounted() {
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    context.fillStyle = '#ffffaa'
    context.fillRect(0, 0, 500, 500)

    context.fillStyle = '#000000'
    context.font = '20px Sans-Serif'
    context.textBalseline = 'top'
    context.fillText('Hello World!', 195, 80)

    // 图片
    let helloWorldImage = new Image(100, 100)

    helloWorldImage.src = require('../assets/timg.jpg')

    helloWorldImage.addEventListener('load', function() {
      context.drawImage(helloWorldImage, 160, 130, 100, 100)
    })

    context.strokeStyle = '#000000'
    context.strokeRect(5, 5, 490, 290)

    console.log(canvas.toDataURL())
  }
}
</script>

<style scoped lang="stylus">
</style>
