<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters([])
  },
  watch: {},
  methods: {
    init() {
      this.$store.dispatch('initUsers', true)
    },
  },
  mounted() {
    this.init()
  },
}
</script>

<template>
  <div class="one">1</div>
  <div class="two">2</div>
  <div class="3">3</div>
</template>


<style lang="scss">
</style>
