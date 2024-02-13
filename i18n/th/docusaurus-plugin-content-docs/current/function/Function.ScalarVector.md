---
title: Function.ScalarVector
---

# Function.ScalarVector


สร้างฟังก์ชันสเกลาบนฟังก์ชันเวกเตอร์ ส่งชุดคำเปลี่ยนแปลงคำขอหลายรายการ


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

ส่งกลับฟังก์ชันสเกลาของชนิด <code>scalarFunctionType</code> ที่เรียก <code>vectorFunction</code> ด้วยอาร์กิวเมนต์แถวเดียว และส่งกลับผลลัพธ์เดียว นอกจากนี้ เมื่อใช้ฟังก์ชันสเกลาสำหรับแต่ละแถวของตารางข้อมูลป้อนเข้าซ้ำๆ แล้ว เช่น Table.AddColumn ระบบจะใช้ <code>vectorFunction</code> ครั้งเดียวสำหรับข้อมูลป้อนเข้าทั้งหมดแทน<br /><code>vectorFunction</code> จะถูกส่งผ่านตารางที่คอลัมน์มีชื่อ และตำแหน่งพารามิเตอร์ของ <code>scalarFunctionType</code> ตรงกัน แต่ละแถวของตารางนี้ประกอบด้วยอาร์กิวเมนต์สำหรับการเรียกใช้ฟังก์ชันสเกลา โดยคอลัมน์ที่สอดคล้องกับพารามิเตอร์ของ <code>scalarFunctionType</code> <br /><code>vectorFunction</code> ต้องส่งกลับรายการที่มีความยาวเดียวกับตารางข้อมูลป้อนเข้า ซึ่งรายการในแต่ละตำแหน่งต้องเป็นผลลัพธ์เดียวกันกับการประเมินฟังก์ชันสเกลาบนแถวข้อมูลป้อนเข้าของตำแหน่งเดียวกัน<br />ตารางข้อมูลป้อนเข้าต้องมีการสตรีม ดังนั้น <code>vectorFunction</code> ต้องสตรีมผลลัพธ์เมื่อมีข้อมูลป้อนเข้ามา ซึ่งใช้ได้กับข้อมูลป้อนเข้ากลุ่มหนึ่งเท่านั้นในแต่ละครั้ง โดยเฉพาะอย่างยิ่ง <code>vectorFunction</code> ต้องไม่แจงนับตารางข้อมูลป้อนเข้ามากกว่าหนึ่งครั้ง<br />



## Category
Function
