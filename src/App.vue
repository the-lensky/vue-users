<template>
  <div class="users">
    <user-column />
    <user
        v-for="user in users"
        :key="user.id"
        :user="user"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserColumn from './components/UserColumn.vue'
import User from './components/User.vue'

export default {
  components: { UserColumn, User },
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
