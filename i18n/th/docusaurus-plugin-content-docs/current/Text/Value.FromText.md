---
title: Value.FromText
---

# Value.FromText


## Description

สร้างค่าที่กำหนดชนิดไว้ล่วงหน้าจากข้อความสำหรับแสดงแทน


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

ถอดรหัสค่าจากข้อความสำหรับแสดงแทน <code>text</code> และแปลเป็นค่าซึ่งมีชนิดที่เหมาะสม    <code>Value.FromText</code> จะใช้ค่าข้อความและส่งกลับตัวเลข ค่าตรรกะ ค่า null ค่าวันที่และเวลา, ค่าระยะเวลา หรือค่าข้อความ ค่าข้อความที่ว่างเปล่าจะถูกแปลเป็นค่า null    อาจมีการระบุ <code>culture</code> เพิ่มเติม (ตัวอย่างเช่น "en-US")



## Category
Text.Conversions from and to text
