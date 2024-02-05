---
title: Text.Remove
---

# Text.Remove


## Description

เอาการปรากฏทั้งหมดออกสำหรับอักขระที่กำหนดให้หรือรายการอักขระจากค่าข้อความที่ป้อนเข้า


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

ส่งกลับสำเนาของค่าข้อความ <code>text</code> ที่เอาอักขระทั้งหมดออกจาก <code>removeChars</code>  


## Examples

### Example #1 
เอาอักขระ , และ ; ออกจากค่าข้อความ
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
