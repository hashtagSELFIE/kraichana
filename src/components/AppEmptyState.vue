<template>
  <div class="empty-container">
    <div class="emoji">¯\_(ツ)_/¯</div>
    <div class="text">ยังไม่มี{{ name }}</div>
    <div v-if="description" class="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.empty-container {
  text-align: center;
  color: #666;
  margin-bottom: 16px;

  > .emoji {
    font-size: 2.5rem;
    font-weight: 700;
  }
  > .text {
    font-size: 1.5rem;
  }
  > .description {
    letter-spacing: 0.5px;
  }
}
</style>
