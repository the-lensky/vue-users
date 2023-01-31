<template>
  <div class="user-row">
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
}
</script>
