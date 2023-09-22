import { mount } from '@vue/test-utils';
import TaskItem from '@/components/TaskItem.vue';

describe('TaskItem', () => {
  it('renders the task title', () => {
    const taskTitle = 'Test Task';
    const wrapper = mount(TaskItem, {
      props: {
        taskTitle,
        taskPriority: 1,
      },
    });
    expect(wrapper.text()).toContain(taskTitle);
  });
});
