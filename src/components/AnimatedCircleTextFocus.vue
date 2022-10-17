<template>
  <div>
    <div class="focus-container pa-6x mx-auto" style="border-radius: 100em;">
      <div ref="circle" :class="animate ? 'animate circle-text' : 'circle-text'">
        <span>{{ this.text }}</span>
      </div>
      <div :class="hover ? 'image image-hover' : 'image'" v-on:click="$router.push(to)">
        <img :src="image" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    animate: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    text: {
      type: String,
      default: () => {
        return 'This is a demo text, set the prop! Lets see how large and long the text can be in this.'
      }
    },
    image: {
      type: String,
      default: () => {
        return ''
      }
    },
    hover: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    to: {
      type: Object,
      default: () => {
        return { name: 'about' }
      }
    }
  },
  components: {},
  data: () => ({
    circle: null
  }),
  mounted () {
    this.circle = new this.$circleType(this.$refs.circle)
  }
}
</script>

<style scoped lang="scss">
.focus-container {
  position: relative;
  width: 200px !important;
}

.animate {
  -webkit-animation-name: spin;
  -webkit-animation-duration: 10000ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: spin;
  -moz-animation-duration: 10000ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: spin;
  -ms-animation-duration: 10000ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;

  animation-name: spin;
  animation-duration: 10000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@-moz-keyframes spin {
  from { -moz-transform: rotate(360deg); }
  to { -moz-transform: rotate(0deg); }
}
@-webkit-keyframes spin {
  from { -webkit-transform: rotate(360deg); }
  to { -webkit-transform: rotate(0deg); }
}
@keyframes spin {
  from {transform:rotate(360deg);}
  to {transform:rotate(0deg);}
}

::v-deep .circle-text {
  font-weight: 700;
  font-size: 1.25em !important;
}

.image-hover {
  cursor: pointer;
  margin-top: -5em;
  margin-left: -5em;
  width: 10em !important;
  transition: 0.5s;
}

.image-hover:hover {
  margin-top: -7.5em;
  margin-left: -7.5em;
  width: 15em !important;
}

.image {
  position: absolute;
  top:50%;
  left:50%;
  margin-top: -5em;
  margin-left: -5em;
  width: 10em !important;
}

</style>
