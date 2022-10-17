<template>
  <section>
    <v-slide-group center-active v-model="currentCard">
      <v-slide-item v-for="(card, index) in cards" :key="index" class="ma-6" v-slot="{ active, toggle }" v-touch="{left: doGoRight, right: doGoLeft}">
        <v-card elevation="2" class="rounded-lg" @click="toggle">
          <v-img :aspect-ratio="1" width="300" :src="`${card.background}-${index}`">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-title>{{ card.title }}</v-card-title>
          <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </section>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      default: () => [
        {
          title: 'Title',
          subtitle: 'The best subtitle',
          description: 'This is the description of the card you are currently looking at.',
          foreground: 'https://picsum.photos/1920/1080?val=4',
          background: 'https://picsum.photos/1920/1080?val=3'
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
    }
  },
  data: () => ({
    currentCard: 0
  }),
  methods: {
    doGoLeft () {
      this.currentCard = this.currentCard <= 0 ? this.currentCard = 0 : this.currentCard - 1
    },
    doGoRight () {
      this.currentCard = this.currentCard >= this.cards.length ? this.currentCard = this.cards.length : this.currentCard + 1
    }
  },
  watch: {
    cards: function () {
      console.log(this.cards)
    }
  }
}
</script>

<style scoped>

</style>
