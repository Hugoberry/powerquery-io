---
title: Text.Replace
---

# Text.Replace


แทนที่การปรากฏทั้งหมดของสตริงย่อยที่กำหนดให้ในข้อความ


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

ส่งกลับผลลัพธ์ของการแทนที่การปรากฏทั้งหมดของค่าข้อความ `old` ในค่าข้อความ `text` ด้วยค่าข้อความ `new` ฟังก์ชันนี้จะพิจารณาตัวพิมพ์ใหญ่-เล็ก


## Examples

### Example #1
แทนที่การปรากฏทั้งหมดของ "the" ในประโยคที่มี "a"
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
