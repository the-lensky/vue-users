<template>
  <div class="user-row">
    <div class="user-cell user-checkbox">
      <input
          type="checkbox"
          v-model="checkedStatus"
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
    user: { type: Object, required: true }
  },

  data() {
    return {
      checkedStatus: false
    }
  },

  watch: {},
  methods: {
    handleUserCheckbox() {
      this.$emit('handleUserCheckbox', this.checkedStatus, this.user.id)
    },
  },

}
</script>
