<template>
  <div v-if="isShowUsers" class="users">
    <user-column />
    <user
        v-for="user in users"
        :key="user.id"
        :user="user"
        @handleUserCheckbox="handleUserCheckbox"
    />
    <toolbox :checkedUsers="checkedUsers" />
  </div>
  <div v-else>No users</div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserColumn from './components/UserColumn.vue'
import User from './components/User.vue'
import Toolbox from './components/Toolbox.vue'

export default {
  components: { UserColumn, User, Toolbox },
  data() {
    return {
      checkedUsers: []
    }
  },

  computed: {
    isShowUsers() {
      return Boolean(this.users.length)
    },
    ...mapGetters([
      'users'
    ])
  },
  watch: {},
  methods: {
    init() {
      this.$store.dispatch('getUsers', true)
    },
    handleUserCheckbox(status, id) {
      status
          ? this.checkedUsers.push(id)
          : this.checkedUsers = this.checkedUsers.filter(userId => userId !== id)
    }
  },
  mounted() {
    this.init()
  },
}
</script>
