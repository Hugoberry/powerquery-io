---
title: Text.Upper
---

# Text.Upper


แปลงอักขระทั้งหมดเป็นตัวพิมพ์ใหญ่


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

ส่งกลับผลลัพธ์ของการแปลงอักขระทั้งหมดใน `text` เป็นตัวพิมพ์ใหญ่ อาจมีการระบุ `culture` เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1
รับอักขระ "aBcD" ในรูปแบบตัวพิมพ์ใหญ่
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
