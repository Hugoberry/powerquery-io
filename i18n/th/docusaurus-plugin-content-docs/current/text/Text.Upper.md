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

ส่งกลับผลลัพธ์ของการแปลงอักขระทั้งหมดใน <code>text</code> เป็นตัวพิมพ์ใหญ่ อาจมีการระบุ <code>culture</code> เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1 
รับอักขระ &#34;aBcD&#34; ในรูปแบบตัวพิมพ์ใหญ่
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
