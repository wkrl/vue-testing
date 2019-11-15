<template>
  <div class="home">
    <TextCard />
  </div>
</template>

<script>
// @ is an alias to /src
import TextCard from '@/components/TextCard.vue'

export default {
  name: 'home',
  components: {
    TextCard
  }
}
</script>
