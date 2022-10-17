<template>
  <section>
    <AutoParallaxCarousel :items="welcomeItems"></AutoParallaxCarousel>
    <HorizontalLineDivider class="secondary"></HorizontalLineDivider>
    <v-container class="pt-0">
      <div class="mt-4 pa-2 text-center extreme-8 text-uppercase">
        You can't resist
      </div>
      <ResponsiveCardBoard :cards="cards"></ResponsiveCardBoard>

      <v-sheet color="secondary" class="expanded">
        <div class="mt-4 pa-10 text-center extreme-10 text-uppercase">
          The effect of your actions is how the world responds to the way you treat it.
        </div>
      </v-sheet>

      <masked-center-view class=""></masked-center-view>

      <v-sheet color="secondary" class="expanded">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </v-sheet>

    </v-container>
  </section>
</template>

<script>
import AutoParallaxCarousel from '@/components/AutoParallaxCarousel'
import HorizontalLineDivider from '@/components/HorizontalLineDivider'
import ResponsiveCardBoard from '@/components/ResponsiveCardBoard'
import MaskedCenterView from '@/components/MaskedCenterView'

export default {
  name: 'Home',
  components: { MaskedCenterView, ResponsiveCardBoard, HorizontalLineDivider, AutoParallaxCarousel },
  data: () => ({
    welcomeItems: [
      {
        title: 'This is the first title',
        content: 'This is the first content below the title',
        background: 'https://picsum.photos/1920/1080?val=1'
      },
      {
        title: 'This is the second title',
        content: 'This is the second content below the title',
        background: 'https://picsum.photos/1920/1080?val=2'
      }
    ],
    cards: [
      {
        title: 'Title',
        subtitle: 'The best subtitle',
        description: 'This is the description of the card you are currently looking at.',
        foreground: '',
        background: 'https://s3.us-west-1.wasabisys.com/xtremebean/6-21-22 photos/Beans-14.jpg'
      },
      {
        title: 'Title',
        subtitle: 'The best subtitle',
        description: 'This is the description of the card you are currently looking at.',
        foreground: 'https://picsum.photos/1920/1080?val=6',
        background: 'https://picsum.photos/1920/1080?val=5'
      },
      {
        title: 'Title',
        subtitle: 'The best subtitle',
        description: 'This is the description of the card you are currently looking at.',
        foreground: 'https://picsum.photos/1920/1080?val=7',
        background: 'https://picsum.photos/1920/1080?val=8'
      },
      {
        title: 'Title',
        subtitle: 'The best subtitle',
        description: 'This is the description of the card you are currently looking at.',
        foreground: 'https://picsum.photos/1920/1080?val=7',
        background: 'https://picsum.photos/1920/1080?val=8'
      },
      {
        title: 'Title',
        subtitle: 'The best subtitle',
        description: 'This is the description of the card you are currently looking at.',
        foreground: 'https://picsum.photos/1920/1080?val=7',
        background: 'https://picsum.photos/1920/1080?val=8'
      },
      {
        title: 'Title',
        subtitle: 'The best subtitle',
        description: 'This is the description of the card you are currently looking at.',
        foreground: 'https://picsum.photos/1920/1080?val=7',
        background: 'https://picsum.photos/1920/1080?val=8'
      },
      {
        title: 'Title',
        subtitle: 'The best subtitle',
        description: 'This is the description of the card you are currently looking at.',
        foreground: 'https://picsum.photos/1920/1080?val=7',
        background: 'https://picsum.photos/1920/1080?val=8'
      },
      {
        title: 'Title',
        subtitle: 'The best subtitle',
        description: 'This is the description of the card you are currently looking at.',
        foreground: 'https://picsum.photos/1920/1080?val=7',
        background: 'https://picsum.photos/1920/1080?val=8'
      },
      {
        title: 'Title',
        subtitle: 'The best subtitle',
        description: 'This is the description of the card you are currently looking at.',
        foreground: 'https://picsum.photos/1920/1080?val=7',
        background: 'https://picsum.photos/1920/1080?val=10'
      }
    ]
  })
}
</script>

<style scoped lang="scss">

</style>
