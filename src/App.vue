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
  <header>
    Hi
  </header>

  <main>
    there
  </main>
</template>

<style scoped>

</style>
