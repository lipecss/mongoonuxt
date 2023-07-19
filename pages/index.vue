<template>
  <div class="container">
    <div class="ellipsis">
      <div class="ellipsis-item"></div>
    </div>
    <div class="header">
      <h2 class="header__title">Push some notes</h2>
      <p class="header__desc">Example using <span
          style="background: #a73535; padding: 4px; font-weight: bold">mongoose</span> and <span
          style="background: #00dc82; padding: 4px; font-weight: bold">Nuxt 3</span></p>
    </div>

    <div class="add-note">
      <div class="add-note__first-line">
        <div class="addon-parent">
          <input class="add-note__input title" type="text" placeholder="Title" v-model="noteTitle"
            :maxlength="maxTitleLength" />
          <div class="input-group-title">{{ noteTitle.length }} / {{ maxTitleLength }}</div>
        </div>
        <button class="add-note__button" :disabled="isDisabled" @click="createNote">
          <span>Add a new note</span>
        </button>
      </div>

      <div class="addon-parent" style="margin-bottom: 2rem">
        <textarea class="add-note__input description" placeholder="Type tour note here" :maxlength="maxDescriptionLength"
          v-model="noteDescription" />

        <div class="input-group-description">{{ noteDescription.length }} / {{ maxDescriptionLength }}</div>
      </div>
    </div>

    <section class="card-grid">
      <div data-v-03072fdb="" class="ellipsis pc-QeHtQ1">
        <div data-v-03072fdb="" class="ellipsis-item"></div>
      </div>
      <div class="layout">
        <ClientOnly>
          <Notes v-for="note in notes" :key="note" :_id="note._id" :title="note.title" :description="note.description"
            @delete="deleteNote" />
        </ClientOnly>
      </div>
    </section>
  </div>
</template>

<script setup>

// data
const noteTitle = ref('')
const noteDescription = ref('')
const maxTitleLength = ref(25)
const maxDescriptionLength = ref(1000)

const { data: notes, pending, error, refresh } = await useAsyncData(
  'notes',
  () => $fetch('/api/notes')
)

//computed
const isDisabled = computed(() => {
  return !noteTitle.value || !noteDescription.value
})

// methods
const createNote = async () => {
  const { data, pending, error } = await useFetch('/api/notes/create', {
    method: 'POST',
    body: {
      title: noteTitle.value,
      description: noteDescription.value
    }
  })

  clearInputs()

  refresh()
}

const deleteNote = async (id) => {
  const { data, pending, error } = await useFetch(`/api/notes/${id}`, { method: 'DELETE', })

  refresh()
}

const clearInputs = () => {
  noteTitle.value = ''
  noteDescription.value = ''
}
</script>

<style lang="scss">
.container {
  max-width: 800px;
  padding: 0 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
}

.header {
  margin-bottom: 30px;
  text-align: center;

  &__title {
    text-align: center;
    font-weight: 400;
    font-size: 32px;
    letter-spacing: 2px;
    margin: 0;
  }

  &__desc {
    margin: 10px 0 0 0;
  }
}

.add-note {
  margin-bottom: 20px;

  &__first-line {
    display: flex;
    gap: 2rem
  }

  &__input {
    width: 100%;
    min-height: 70px;
    padding: 0 20px;
    background: #0b0a0a;
    box-sizing: border-box;
    outline: none;
    border: 1px solid#27272a;
    font-size: 18px;
    transition: border-color 0.3s ease;

    &:hover {
      border-color: #00dc82;
    }
  }

  &__button {
    width: 50%;
    margin-bottom: 1rem;
    border-radius: 10px;
    border: 1px solid transparent;
    background-color: #18181b;
    color: #f4f4f5;
    position: relative;


    span {
      word-break: break-all;
      font-weight: bold;
      text-transform: uppercase;
    }

    &:hover {
      cursor: pointer;
      background: #0c0c0d;
    }

    &::before {
      transition: all 0.2s ease 0s;
      content: "";
      position: absolute;
      inset: -3px;
      z-index: -1;
      border-radius: 9.5px;
      background: linear-gradient(to right, rgb(0, 220, 130), rgb(54, 228, 218), rgb(22, 167, 158));
    }

    &:disabled {
      background: #2e2e2e;
      color: linen;
      opacity: 1;
      border: transparent;
      cursor: not-allowed;

      &::before {
        content: "";
        position: absolute;
        background: transparent;
      }
    }
  }

  .title {
    margin-bottom: 1rem
  }

  .description {
    padding: 20px;
    resize: none;
    height: 10rem !important;
  }
}

.addon-parent {
  position: relative;
  width: 100%;
}

.input-group-title {
  position: absolute;
  right: 5px;
  bottom: 16px;
  color: #ada9a4;
  font-size: 0.95rem;
  line-height: 1.75rem;
}

.input-group-description {
  position: absolute;
  right: 5px;
  bottom: -23px;
  color: #ada9a4;
  font-size: 0.95rem;
  line-height: 1.75rem;
}

.card-grid {
  padding-bottom: 5rem;
  display: grid;
  gap: 1rem;
  text-align: start;
}

.layout {
  display: grid;
  gap: 1rem;
  text-align: start;
}

@media (min-width: 640px) {
  .card-grid .layout {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .card-grid .layout {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
