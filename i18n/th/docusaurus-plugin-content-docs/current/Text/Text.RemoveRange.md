---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

เอาจำนวนอักขระออกโดยเริ่มต้นที่ออฟเซตที่กำหนด


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

ส่งกลับสำเนาของค่าข้อความ <code>text</code> ที่เอาอักขระทั้งหมดออกจากตำแหน่ง <code>offset</code>    พารามิเตอร์ที่เลือกได้ <code>count</code> สามารถใช้เพื่อระบุจำนวนอักขระที่จะเอาออก ค่าเริ่มต้นของ <code>count</code> คือ 1 ค่าตำแหน่งเริ่มต้นที่ 0


## Examples

### Example #1 
เอาอักขระ 1 ออกจากค่าข้อความ &#34;ABEFC&#34; ที่ตำแหน่ง 2
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
เอาสองอักขระออกจากค่าข้อความ &#34;ABEFC&#34; โดยเริ่มต้นที่ตำแหน่ง 2
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
