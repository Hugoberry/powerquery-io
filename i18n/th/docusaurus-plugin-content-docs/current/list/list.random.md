---
title: List.Random
---

# List.Random


ส่งกลับรายการของตัวเลขสุ่ม


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

คืนค่ารายการตัวเลขสุ่มระหว่าง 0 และ 1 ที่ได้รับจำนวนของค่าที่จะสร้างและค่าข้อมูลเริ่มต้นที่เลือกได้ <ul>   <li><code>count</code>: จำนวนค่าสุ่มที่จะสร้าง</li>   <li><code>seed</code>:  <i>[ระบุหรือไม่ก็ได้]</i> ค่าตัวเลขที่ใช้ในการ Seed ตัวสร้างตัวเลขสุ่ม  ถ้าละเว้น รายการที่ไม่ซ้ำของตัวเลขสุ่มจะถูกสร้างในแต่ละครั้งที่คุณเรียกใช้ฟังก์ชัน  ถ้าคุณระบุค่าข้อมูลเริ่มต้นด้วยตัวเลข ทุกครั้งที่เรียกฟังก์ชันจะสร้างรายการเดียวกันของตัวเลขสุ่ม</li></ul>


## Examples

### Example #1 
สร้างรายการของ 3 ตัวเลขสุ่ม
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
สร้างรายการของ 3 ตัวเลขสุ่มโดยระบุค่า Seed
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
