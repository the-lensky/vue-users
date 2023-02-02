<template>
  <div class="user-toolbox mtM">
    <div>
      <button v-if="isShowDeleteBtn" class="user-add" @click="handleDeleteUser">Delete</button>
    </div>
    <div class="user-search-wrap">
      <div class="user-search">
        <Search @handleSearch="handleSearch" />
      </div>
      <div class="user-count">Users count: {{ usersToShow.length }}</div>
    </div>
  </div>
</template>

<script>
import Search from './Search.vue'

export default {
  components: { Search },
  props: {
    checkedUsers: { type: Array, required: false },
    usersToShow: { type: Array, required: true },
  },
  methods: {
    handleDeleteUser() {
      this.$store.dispatch('deleteUsers', this.checkedUsers)
      this.$emit('handleClearCheckedUsers')
    },
    handleSearch(value) {
      this.$emit('handleSearch', value)
    }
  },
  computed: {
    isShowDeleteBtn() {
      return Boolean(this.checkedUsers.length)
    },
  }
}
</script>
