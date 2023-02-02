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
  props: {
    isCheckAll: { type: Boolean, required: true },
  },
  data() {
    return {
      checkedAllStatus: false,
      columns: [{ title: 'Full Name' }, { title: 'Email' }, { title: 'Phone' }]
    }
  },
  watch: {
    'isCheckAll'(val) {
      if(!val) {
        this.checkedAllStatus = val
      } else {
        return this.checkedAllStatus
      }
    }
  },
  methods: {
    handleAllCheckbox() {
      this.$emit('handleAllCheckbox', this.checkedAllStatus)
    },
  },
}
</script>
