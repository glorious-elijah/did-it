<template>
  <div class="w-[100vw] h-[100vh] flex justify-between px-10 py-5 space-x-10 bg-primary">
    <div class="left column">
      <nav class="flex justify-around items-center text-2xl">
        <button class="btn">
          Tasks
        </button>
        <button class="btn">
          Notes
        </button>
      </nav>
      <div
        v-for="i in 5"
        :key="i"
      >
        <TaskItem
          :task-title="'Task ' + i"
          :task-priority="(i % 3) + 1"
        />
      </div>
    </div>
    <div class="right column" />
  </div>
</template>

<script lang="ts" setup>
  import TaskItem from "./components/TaskItem.vue";
</script>

<style lang="scss" scoped>
  .left {
    width: 30%;
    height: 100%;
  }

  .btn {
    border: 0px;
    font-size: larger;
  }

  .right {
    width: 70%;
    height: 100%;
  }
  .column {
    background-image: linear-gradient(to bottom, rgba(85, 186, 227, .7) 30%, rgba(69, 112, 131, .24) 80%); 
    border-radius: 10px;
    padding: 8px 8px;
    padding-right: 13px;
    box-shadow: 2px 2px  3px 0px rgba(0, 0, 0, 0.25);
  }
</style>
