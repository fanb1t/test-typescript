# test-typescript

โปรเจกต์นี้เป็นตัวอย่างการเขียนฟังก์ชันสำหรับเรียงลำดับอาเรย์ (sort) โดยไม่ใช้ฟังก์ชัน `sort` ที่มีอยู่ใน JavaScript/TypeScript และมีการทดสอบฟังก์ชันด้วย unit test (Jest)

## ฟีเจอร์
- ฟังก์ชัน [`sortArr_minTmax`](src/test.ts) สำหรับเรียงอาเรย์จากน้อยไปมาก
- ฟังก์ชัน [`sortArr_maxTmin`](src/test.ts) สำหรับเรียงอาเรย์จากมากไปน้อย
- ตัวอย่างการรวมอาเรย์และเรียงลำดับ
- มี unit test ใน [`src/test.test.ts`](src/test.test.ts) สำหรับทดสอบฟังก์ชัน
- ผู้ใช้สามารถเพิ่มค่าในอาเรย์ได้เพื่ออยากทดลองการเรียงจากน้อยไปมากทัั้ง3อาเรย์

## วิธีการติดตั้งและใช้งาน

1. **Clone โปรเจกต์นี้**
   ```sh
   git clone <[repository-url](https://github.com/fanb1t/test-typescript.git)>
   cd test-typescript
   ```

2. **ติดตั้ง dependencies**
   ```sh
   npm install
   ```

3. **รันโปรเจกต์**
   ```sh
   npm run dev
   ```

4. **รัน unit test**
   ```sh
   npm test
   ```

## โครงสร้างโปรเจกต์

- [`src/test.ts`](src/test.ts) : ฟังก์ชันหลักและตัวอย่างการใช้งาน
- [`src/test.test.ts`](src/test.test.ts) : ไฟล์ทดสอบฟังก์ชันด้วย Jest

## หมายเหตุ

- ไม่ใช้ฟังก์ชัน `sort` สำเร็จรูป
- ใช้ TypeScript เขียนโค้ดฟังก์ชัน Jest ใช้สำหรับทดสอบunittest และใช้nodemonสำหรับรันtypescriptต่อเนื่อง