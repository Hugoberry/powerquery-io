---
title: Text.From
---

# Text.From


## Description

สร้างค่าข้อความจากค่าที่กำหนด


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

ส่งกลับข้อความสำหรับแสดงแทนของ <code>value</code> โดย <code>value</code> สามารถเป็นค่า <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> หรือ <code>binary</code> ได้    ถ้าค่าที่กำหนดให้เป็น null <code>Text.From</code> จะส่งกลับค่า null โดยอาจมีการระบุ <code>culture</code> เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1 
สร้างค่าข้อความจากตัวเลข 3
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
