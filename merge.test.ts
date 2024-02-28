import { merge } from './merge';

describe('merge function', () => {
  it('should merge three sorted collections correctly', () => {
    const result = merge([1, 3, 5], [4, 2, 0], [6, 7, 8]);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  });

});

