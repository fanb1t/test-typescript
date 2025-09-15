// โจทย์ ให้อาเรย์มา3ตัว เรียงจากน้อยไปมาก และเรียงจากมากไปน้อย
// ให้เอาเรย์มา3ตัว collection_1, collection_2, collection_3
// ให้collection_1 และ collection_2 เป็นอาเรย์ที่เรียงจากน้อยไปมาก
// ให้collection_3 เป็นอาเรย์ที่เรียงจากมากไปน้อย
// ให้เขียนฟังก์ชันเพื่อรวมอาเรย์ทั้ง3เข้าด้วยกัน และเรียงจากน้อยไปมาก
// ห้ามใช้ฟังก์ชันสำเร็จรูปของsort

// กำหนดอาเรย์3ตัวcollection_1, collection_2, collection_3
const collection_1: number[] = [1, 4, 6, 8, 10];
const collection_2: number[] = [2, 3, 5, 7, 9];
const collection_3: number[] = [20, 18, 16, 14, 12];

// สร้างฟังก์ชันsortเพื่อเรียงค่าจากน้อยไปมาก
function sortArr_minTmax(arr: number[]): number[] {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // ใช้ ! บอก TypeScript ว่ามั่นใจว่าไม่ undefined
            if (arr[j]! > arr[j + 1]!) {
                let temp = arr[j]!;
                arr[j] = arr[j + 1]!;
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

