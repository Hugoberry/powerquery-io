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

ส่งกลับผลลัพธ์ของการแทนที่การปรากฏทั้งหมดของค่าข้อความ <code>old</code> ในค่าข้อความ <code>text</code> ด้วยค่าข้อความ <code>new</code> ฟังก์ชันนี้จะพิจารณาตัวพิมพ์ใหญ่-เล็ก


## Examples

### Example #1 
แทนที่การปรากฏทั้งหมดของ &#34;the&#34; ในประโยคที่มี &#34;a&#34;
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
