---
title: Parquet.Document
---

# Parquet.Document


ส่งกลับเนื้อหาของเอกสาร Parquet เป็นตาราง


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Remarks

ส่งกลับเนื้อหาของเอกสาร Parquet เป็นตาราง ตัวเลือกประกอบด้วย:    <ul>    <li> <code>TypeMapping</code> : ค่าข้อความที่ควบคุมการแมปชนิดเริ่มต้นเมื่ออ่านและเขียนไฟล์ ค่าเริ่มต้นคือ null และพยายามรักษาความเที่ยงตรงของชนิดต้นฉบับให้ได้มากที่สุด ค่า “Sql” จะให้ผลลัพธ์ที่เข้ากันได้กับ Sql Server มากที่สุด</li>    </ul>



## Category
การเข้าถึงข้อมูล
