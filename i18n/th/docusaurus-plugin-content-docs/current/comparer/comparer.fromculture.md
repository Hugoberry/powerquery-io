---
title: Comparer.FromCulture
---

# Comparer.FromCulture


ส่งกลับฟังก์ชันตัวเปรียบเทียบตามความไวต่อวัฒนธรรมและตัวพิมพ์ใหญ่-เล็กที่ระบุ


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

ส่งกลับฟังก์ชันตัวเปรียบเทียบที่ใช้ `culture` และความไวของตัวพิมพ์ใหญ่-เล็กที่ระบุโดย `ignoreCase` เพื่อดําเนินการเปรียบเทียบ  
  
ฟังก์ชันตัวเปรียบเทียบยอมรับสองอาร์กิวเมนต์และส่งกลับ -1, 0 หรือ 1 โดยขึ้นอยู่กับว่าค่าแรกน้อยกว่า เท่ากับ หรือมากกว่าค่าที่สอง  
  
ค่าเริ่มต้นสําหรับ `ignoreCase` เป็นเท็จ `culture` ควรเป็นหนึ่งในตําแหน่งที่ตั้งที่ได้รับการสนับสนุนโดย .NET framework (ตัวอย่างเช่น "en-US")


## Examples

### Example #1
เปรียบเทียบ "a" กับ "A" โดยใช้ภาษา "en-US" เพื่อดูว่าค่าเท่ากันหรือไม่
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
เปรียบเทียบ "a" กับ "A" โดยใช้ภาษา "en-US" และไม่คำนึงถึงตัวพิมพ์ใหญ่พิมพ์เล็ก เพื่อดูว่าค่าทั้งสองเท่ากันหรือไม่
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
