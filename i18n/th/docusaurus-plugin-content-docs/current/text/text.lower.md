---
title: Text.Lower
---

# Text.Lower


แปลงอักขระทั้งหมดเป็นตัวพิมพ์เล็ก


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

ส่งกลับผลลัพธ์ของการแปลงอักขระทั้งหมดใน `text` เป็นตัวพิมพ์เล็ก อาจมีการระบุ `culture` เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1
รับอักขระ "AbCd" ในรูปแบบตัวพิมพ์เล็ก
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
