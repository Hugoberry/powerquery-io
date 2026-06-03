---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


รวมตารางมิติที่ระบุลงในบริบทตัวกรองของคิวบ์และเปลี่ยนแปลงส่วนประกอบแบบมิติของบริบทตัวกรองโดยขยายชุดที่ระบุของแอตทริบิวต์มิติ


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Remarks

ผสานตารางมิติที่ระบุ `dimensionSelector` ลงในบริบทตัวกรองของ `cube` และเปลี่ยนแปลงส่วนประกอบมิติโดยการขยายชุดที่ระบุ `attributeNames` ของแอตทริบิวต์มิติ แอตทริบิวต์มิติจะถูกเพิ่มลงในมุมมองแบบตารางที่มีคอลัมน์ชื่อว่า `newColumnNames`, หรือ `attributeNames` หากไม่ได้ระบุ.



## Category
Cube
