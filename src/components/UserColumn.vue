<template>
  <div class="user-row mbM">
    <div class="user-cell textL" v-for="column in columns">{{ column.title }}</div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      columns: [{ title: 'Full Name' }, { title: 'Email' }, { title: 'Phone' }]
    }
  },
}
</script>
