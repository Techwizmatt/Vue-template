<template>
  <div class="expanded">
    <video-background src="https://artsandculture.withgoogle.com/gcs/national-parks-service/en-us/9f885369-a52a-4a0b-8b2f-f3e5e41cdd54.mp4" style="max-height: 400px; height: 50em;">
      <v-overlay :absolute="true" :opacity="0.5" z-index="4">
        <v-flex align-center>
          <div>
            <animated-circle-text-focus class="pa-12"></animated-circle-text-focus>
          </div>
        </v-flex>
      </v-overlay>
    </video-background>
  </div>
</template>

<script>
import AnimatedCircleTextFocus from '@/components/AnimatedCircleTextFocus'
export default {
  components: { AnimatedCircleTextFocus },
  props: {
    backgroundVideo: {
      type: String(),
      default: () => ''
    }
  },
  data: () => ({})
}
</script>

<style scoped>
</style>
