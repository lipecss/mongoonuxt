<template>
  <div class="terminal">
    <div class="header">
      <div class="controls">
        <div class="remove" title="Delete" @click="emitToDelete" />
        <div />
        <div />
      </div>
      <div class="title"> {{ title }}</div>
    </div>
    <div class="window">
      <span>
        {{ description }}
      </span>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  _id: String,
  title: { type: String, default: 'Bash' },
  description: String
})

const emit = defineEmits(['delete'])

const emitToDelete = () => {
  emit('delete', props._id)
}
</script>

<style lang="scss">
.terminal {
  background: #121110;
  border: 1px solid #201e1b;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  height: 16rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 32rem;
  overflow: hidden;
  position: relative;
  width: 100%;

  .header {
    align-items: center;
    border-bottom: 1px solid #201e1b;
    display: flex;
    height: 3rem;
    position: relative;
    width: 100%;

    .controls {
      -webkit-margin-start: 1rem;
      display: flex;
      margin-inline-start: 1rem;
      z-index: 9999;

      div:first-child {
        background: #ff7353;
        border-radius: 999px;
        height: 0.75rem;
        width: 0.75rem;

        &:hover {
          cursor: pointer;
        }
      }

      div:nth-child(2) {
        background: #ffdc4e;
      }

      div:nth-child(3) {
        background: #3ceea5;
      }
    }
  }

  .title {
    align-items: center;
    display: flex;
    height: 100%;
    inset-inline-start: 0;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .window {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    padding: 1rem;
    background: transparent;
    overflow-wrap: break-word;
    overflow-y: auto;
  }
}

.terminal .header .controls div:nth-child(2),
.terminal .header .controls div:nth-child(3) {
  -webkit-margin-start: 0.5rem;
  border-radius: 999px;
  height: 0.75rem;
  margin-inline-start: 0.5rem;
  width: 0.75rem;
}
</style>
