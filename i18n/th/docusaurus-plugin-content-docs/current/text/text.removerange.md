---
title: Text.RemoveRange
---

# Text.RemoveRange


เอาจำนวนอักขระออกโดยเริ่มต้นที่ออฟเซตที่กำหนด


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

ส่งกลับสำเนาของค่าข้อความ `text` ที่เอาอักขระทั้งหมดออกจากตำแหน่ง `offset` พารามิเตอร์ที่เลือกได้ `count` สามารถใช้เพื่อระบุจำนวนอักขระที่จะเอาออก ค่าเริ่มต้นของ `count` คือ 1 ค่าตำแหน่งเริ่มต้นที่ 0


## Examples

### Example #1
เอาอักขระ 1 ออกจากค่าข้อความ "ABEFC" ที่ตำแหน่ง 2
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
เอาสองอักขระออกจากค่าข้อความ "ABEFC" โดยเริ่มต้นที่ตำแหน่ง 2
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
