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

ส่งกลับผลลัพธ์ของการแปลงอักขระทั้งหมดใน <code>text</code> เป็นตัวพิมพ์เล็ก อาจมีการระบุ <code>culture</code> เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1 
รับอักขระ &#34;AbCd&#34; ในรูปแบบตัวพิมพ์เล็ก
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
