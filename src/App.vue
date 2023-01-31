<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'users'
    ])
  },
  watch: {},
  methods: {
    init() {
      this.$store.dispatch('getUsers', true)
      console.log('======', this.$store.state.users)
    },
  },
  mounted() {
    this.init()
  },
}
</script>

<template>
  <div class="user">
    <div
        class="user-row"
        v-for="user in users"
    >
      {{ user.name }}
    </div>
  </div>
</template>


<style lang="scss">
</style>
