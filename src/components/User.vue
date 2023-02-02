<template>
  <div class="user-row">
    <div class="user-cell user-checkbox">
      <input
          type="checkbox"
          v-model="checked"
          @change="handleUserCheckbox"
      />
    </div>
    <div class="user-cell">{{ user.name }}</div>
    <div class="user-cell">{{ user.email }}</div>
    <div class="user-cell">{{ user.phone }}</div>
  </div>
</template>

<script>
export default {
  props: {
    user: { type: Object, required: true },
    isCheckAll: { type: Boolean, required: true },
  },

  data() {
    return {
      checked: false,
    }
  },
  watch: {
    'isCheckAll'(val) {
      if(!val) {
        this.checked = false
      } else {
        this.checked = true
      }
    }
  },
  methods: {
    handleUserCheckbox() {
      if(this.isCheckAll) {
        this.$emit('handleUserCheckbox', false, this.user.id)
      } else {
        this.$emit('handleUserCheckbox', this.checked, this.user.id)
      }
    },
  },
}
</script>
