import { BoardEntity } from './board.entity.js';

describe('BoardEntity', () => {
  it('should be defined', () => {
    expect(new BoardEntity()).toBeDefined();
  });
});
