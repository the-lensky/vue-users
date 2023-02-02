<template>
  <div class="user-row">
    <div class="user-cell">
      <button class="user-add" @click="handleSort('name')">Name</button>
    </div>
    <div class="user-cell">
      <button class="user-add" @click="handleSort('email')">Email</button>
    </div>
    <div class="user-cell">
      <button class="user-add" @click="handleSort('phone')">Phone</button>
    </div>
    <div class="user-cell">
      <div class="user-cell_btn">
        <button class="user-add" @click="handleAddUser">Add User</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSort: 'name',
      currentSortDir: 'asc'
    }
  },
  methods: {
    handleSort(s) {
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = s
      this.$emit('handleSort', this.currentSort, this.currentSortDir)
    },
    handleAddUser() {
      this.$emit('handleAddUser')
    },
  },
}
</script>
