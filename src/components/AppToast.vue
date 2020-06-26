<template>
  <div :class="['toast-overlay', type]">
    <i :class="['fas', icon]"></i> {{ msg }}
  </div>
</template>

<script>
export default {
  name: "AppToast",
  props: {
    msg: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: "fa-exclamation-triangle"
    },
    type: {
      type: String,
      default: "warning"
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes slide {
  0%,
  to {
    bottom: -64px;
  }
  10%,
  90% {
    bottom: 4px;
  }
}

.toast-overlay {
  position: fixed;
  bottom: 4px;
  left: 4px;
  right: 4px;
  padding: 0.75rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  animation: slide 5s forwards;
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;

  &.success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
}
</style>
