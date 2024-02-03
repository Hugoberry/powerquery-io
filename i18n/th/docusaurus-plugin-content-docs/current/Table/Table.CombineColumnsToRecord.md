---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

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


## Details

รวมคอลัมน์ที่ระบุของ <code>table</code> เป็นคอลัมน์ที่มีค่าเป็นระเบียนใหม่ที่ชื่อว่า <code>newColumnName</code> โดยแต่ละระเบียนจะมีชื่อและค่าของเขตข้อมูลที่สอดคล้องกับชื่อและค่าของคอลัมน์ที่รวมกัน ถ้าระบุระเบียนไว้สำหรับ <code>options</code> อาจมีตัวเลือกต่อไปนี้:    <ul>     <li> <code>DisplayNameColumn</code>: เมื่อระบุเป็นข้อความ แสดงว่าควรถือว่าชื่อคอลัมน์เป็นชื่อที่แสดงของระเบียน</li>     <li> <code>TypeName</code>: เมื่อระบุเป็นข้อความ ให้ระบุชื่อชนิดแบบตรรกะสำหรับระเบียนผลลัพธ์ ซึ่งสามารถใช้ระหว่างการโหลดข้อมูลเพื่อผลักดันลักษณะการทำงานตามสภาพแวดล้อมการโหลด</li>    </ul>    



## Category
Table.Transformation
