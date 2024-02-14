---
title: Text.Clean
---

# Text.Clean


ส่งกลับค่าข้อความโดยลบอักขระควบคุมทั้งหมด


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

ส่งกลับค่าข้อความโดยลบอักขระควบคุมทั้งหมด <code>text</code> ตัว


## Examples

### Example #1 
ลบอักขระเลื่อนและอักขระควบคุมอื่นๆ ออกจากค่าข้อความ
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
