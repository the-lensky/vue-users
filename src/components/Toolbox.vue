<template>
  <div class="user-row mtM">
    <div class="user-cell">
      <button v-if="isShowDeleteBtn" class="user-add" @click="handleDeleteUser">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checkedUsers: { type: Array, required: false }
  },

  methods: {
    handleDeleteUser() {
      this.$store.dispatch('deleteUsers', this.checkedUsers)

    }
  },
  computed: {
    isShowDeleteBtn() {
      return Boolean(this.checkedUsers.length)
    }
  }
}
</script>
