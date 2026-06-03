---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


รวมคอลัมน์ที่ระบุไว้ในคอลัมน์ที่มีค่าระเบียนใหม่ซึ่งแต่ละระเบียนมีชื่อเขตข้อมูลและค่าที่สอดคล้องกับชื่อคอลัมน์และค่าของคอลัมน์ที่ถูกรวมเข้าด้วยกัน


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

รวมคอลัมน์ที่ระบุของ `table` เป็นคอลัมน์ที่มีค่าเป็นระเบียนใหม่ที่ชื่อว่า `newColumnName` โดยแต่ละระเบียนจะมีชื่อและค่าของเขตข้อมูลที่สอดคล้องกับชื่อและค่าของคอลัมน์ที่รวมกัน ถ้าระบุระเบียนไว้สำหรับ `options` อาจมีตัวเลือกต่อไปนี้:

-   `DisplayNameColumn`: เมื่อระบุเป็นข้อความ แสดงว่าควรถือว่าชื่อคอลัมน์เป็นชื่อที่แสดงของระเบียน
-   `TypeName`: เมื่อระบุเป็นข้อความ ให้ระบุชื่อชนิดแบบตรรกะสำหรับระเบียนผลลัพธ์ ซึ่งสามารถใช้ระหว่างการโหลดข้อมูลเพื่อผลักดันลักษณะการทำงานตามสภาพแวดล้อมการโหลด



## Category
Table.Transformation
