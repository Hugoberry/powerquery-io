---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


คืนค่าชื่อวันของสัปดาห์


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

ส่งกลับชื่อวันของสัปดาห์สำหรับ <code>date</code> ที่กำหนดให้ อาจมีการระบุ <code>culture</code> เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1 
ดึงข้อมูลชื่อวันของสัปดาห์
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
