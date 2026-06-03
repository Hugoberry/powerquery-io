---
title: Text.Proper
---

# Text.Proper


ทำให้อักษรตัวแรกของแต่ละคำเป็นตัวพิมพ์ใหญ่


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

ส่งกลับผลลัพธ์ของการทำให้เป็นตัวพิมพ์ใหญ่เฉพาะตัวอักษรแรกของแต่ละคำในค่าข้อความ `text` ตัวอักษรอื่นๆ ทั้งหมดจะถูกส่งกลับเป็นตัวพิมพ์เล็ก อาจมีการระบุ `culture` เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1
ใช้ `Text.Proper` ในประโยคที่ไม่ซับซ้อน
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
