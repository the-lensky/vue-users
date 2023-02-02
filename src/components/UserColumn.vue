<template>
  <div class="user-row mbM">
    <div class="user-cell user-checkbox">
      <input
          type="checkbox"
          v-model="checkedAllStatus"
          @change="handleAllCheckbox"
      />
    </div>
    <div class="user-cell textL" v-for="column in columns">{{ column.title }}</div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      checkedAllStatus: false,
      columns: [{ title: 'Full Name' }, { title: 'Email' }, { title: 'Phone' }]
    }
  },
  methods: {
    handleAllCheckbox() {
      this.$emit('handleAllCheckbox', this.checkedAllStatus)
    },
  },
}
</script>
