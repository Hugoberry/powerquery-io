---
title: Text.PadEnd
---

# Text.PadEnd


ส่งกลับข้อความของความยาวที่ระบุโดยการเติมช่องว่างภายในท้ายข้อความที่กำหนด


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

ส่งกลับค่า <code>text</code> ที่มีการเติมช่องว่างภายในไปที่ความยาว <code>count</code> โดยการแทรกช่องว่างท้ายค่าข้อความ <code>text</code>     อักขระที่เลือกได้ <code>character</code> สามารถใช้เพื่อระบุอักขระที่ใช้สำหรับการเติมช่องว่างภายใน อักขระเริ่มต้นในการเติมช่องว่างภายในได้แก่ช่องว่าง


## Examples

### Example #1 
เติมช่องว่างภายในท้ายค่าข้อความเพื่อให้มีความยาว 10 อักขระ
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2 
เติมช่องว่างภายในท้ายค่าข้อความด้วย &#34;|&#34; เพื่อให้มีความยาว 10 อักขระ
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
