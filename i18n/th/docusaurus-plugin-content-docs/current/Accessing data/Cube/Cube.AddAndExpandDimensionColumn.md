---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

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


## Details

รวมตารางมิติที่ระบุ, <code>dimensionSelector</code>, ลงในบริบทตัวกรอง, <code>cube</code>, ของคิวบ์และเปลี่ยนแปลงส่วนประกอบแบบมิติของบริบทตัวกรองโดยขยายชุดที่ระบุ, <code>attributeNames</code>, ของแอตทริบิวต์มิติ แอตทริบิวต์มิติจะถูกเพิ่มลงในมุมมองแบบตารางที่มีคอลัมน์ชื่อว่า <code>newColumnNames</code>, หรือ <code>attributeNames</code> หากไม่ได้ระบุ



## Category
Cube
