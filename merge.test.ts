//import.
import { merge } from "./merge";

describe('merge function', () => {
    it('should merge sorted arrays', () => {
        // test case.
        const result = merge([1, 3, 5], [4, 2, 0], []);
        expect(result).toEqual([0, 1, 2, 3, 4, 5]);
    });
});
