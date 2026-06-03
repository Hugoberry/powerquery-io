---
title: Text.PadStart
---

# Text.PadStart


ส่งกลับข้อความของความยาวที่ระบุโดยการเติมช่องว่างภายในที่จุดเริ่มต้นของข้อความที่กำหนด


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

ส่งกลับค่า `text` ที่มีการเติมช่องว่างภายในไปที่ความยาว `count` โดยการแทรกช่องว่างที่จุดเริ่มต้นของค่าข้อความ `text` อักขระที่เลือกได้ `character` สามารถใช้เพื่อระบุอักขระที่ใช้สำหรับการเติมช่องว่างภายใน อักขระเริ่มต้นในการเติมช่องว่างภายในได้แก่ช่องว่าง


## Examples

### Example #1
เติมช่องว่างภายในที่จุดเริ่มต้นของค่าข้อความเพื่อให้มีความยาว 10 อักขระ
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2
เติมช่องว่างภายในที่จุดเริ่มต้นของค่าข้อความด้วย "|" เพื่อให้มีความยาว 10 อักขระ
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
