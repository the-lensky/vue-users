<template>
  <input
      class="user-search"
      type="text"
      placeholder="Search"
      ref="search"
      v-on:input="handleSearch"
  />
</template>

<script>
export default {
  methods: {
    handleSearch(e) {
      this.$emit('handleSearch', e.target.value)
    },
  },
  mounted() {
    this.$refs.search.focus()
  },
}
</script>
