import { TaskEntity } from './task.entity.js';

describe('TaskEntity', () => {
  it('should be defined', () => {
    expect(new TaskEntity()).toBeDefined();
  });
});
