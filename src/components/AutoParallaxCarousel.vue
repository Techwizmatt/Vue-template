<template>
  <section>
    <span v-if="singleTitle !== '' && singleContent !== ''">
      <v-carousel v-model="carousel" hide-delimiters :cycle="true" :show-arrows="false">
        <v-overlay :absolute="true" :opacity="0.5" z-index="4">
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="text-h4 mb-4">{{ singleTitle }}</h1>
              <h4 class="subheading">{{ singleContent }}</h4>
            </v-col>
          </v-row>
        </v-overlay>
        <v-carousel-item v-for="(item, index) in items" :key="index">
          <v-parallax :src="item.background" :height="height"></v-parallax>
        </v-carousel-item>
      </v-carousel>
    </span>
    <span v-else>
      <v-carousel v-model="carousel" hide-delimiters :cycle="true" :show-arrows="false">
        <v-carousel-item v-for="(item, index) in items" :key="index">
          <v-parallax :src="item.background" :height="height">
            <v-overlay :absolute="true" :opacity="0.7">
              <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                  <h1 class="text-h4 mb-4">{{ item.title }}</h1>
                  <h4 class="subheading">{{ item.content }}</h4>
                </v-col>
              </v-row>
            </v-overlay>
          </v-parallax>
        </v-carousel-item>
      </v-carousel>
    </span>
  </section>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: () => 800
    },
    items: {
      type: Array,
      default: () => [
        {
          title: 'This is the title',
          content: 'This is the content below the title',
          background: 'https://picsum.photos/1920/1080?val=1'
        },
        {
          title: 'This is the second title',
          content: 'This is the second content below the title',
          background: 'https://picsum.photos/1920/1080?val=2'
        }
      ]
    },
    singleTitle: {
      type: String,
      default: () => String()
    },
    singleContent: {
      type: String,
      default: () => String()
    }
  },
  data: () => ({
    carousel: Number()
  })
}
</script>

<style scoped lang="scss">
  ::v-deep .v-parallax__content { padding: 0 !important; }
</style>
