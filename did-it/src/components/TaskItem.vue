<template>
  <div
    :class="`card ${
      (TaskPriorityEnum.High === props.taskPriority && 'bg-hot') ||
      (TaskPriorityEnum.Medium === props.taskPriority && 'bg-lukewarm') ||
      (TaskPriorityEnum.Low === props.taskPriority && 'bg-cold')
    }  `"
  >
    <div class=" w-full h-full flex bg-secondary rounded-r-[4px] justify-between items-center px-6">
      <h1 class="text-2xl h-full">
        {{ taskTitle }}
      </h1>
      <div class="button_holders">
        <button class="round_btn confirm" />
        <button class="round_btn reject" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { TaskPriorityEnum } from "../components/TaskPriorityEnum";
  import { defineProps } from "vue";

  const props = defineProps({
    taskTitle: {
      type: String,
      default: "",
      required: true,
    },
    taskPriority: {
      type: Number,
      default: 3,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  .card {
    @apply w-full h-full;
    border-radius: 4px;
    padding-left: 30px;
    margin-top: 10px;
    font-size: 20px;
  }
  .confirm {
    @apply bg-greenButton
  }

  .reject {
    @apply bg-redButton
  }

  .round_btn {
    @apply sm:w-[25px] sm:h-[25px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] w-[15px] h-[15px] rounded-full;
  }

  .button_holders {
    @apply flex justify-between items-center w-1/4 h-full py-2 space-x-2;
  }
</style>
