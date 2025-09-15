// นำเข้า (import) ฟังก์ชันที่ต้องการทดสอบ
import { sortArr_minTmax, sortArr_maxTmin } from './test';

// ตัวอย่าง test สำหรับ sortArr_minTmax
describe('sortArr_minTmax', () => {
    it('should sort array from min to max', () => {
        const arr = [5, 2, 9, 1];
        const result = sortArr_minTmax([...arr]);
        expect(result).toEqual([1, 2, 5, 9]);
    });
});

// ตัวอย่าง test สำหรับ sortArr_maxTmin
describe('sortArr_maxTmin', () => {
    it('should sort array from max to min', () => {
        const arr = [5, 2, 9, 1];
        const result = sortArr_maxTmin([...arr]);
        expect(result).toEqual([9, 5, 2, 1]);
    });
}
);