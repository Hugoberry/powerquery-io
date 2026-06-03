---
title: Date.MonthName
---

# Date.MonthName


คืนค่าชื่อของคอมโพเนนท์เดือน


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

ส่งกลับคอมโพเนนต์ชื่อของเดือนสำหรับ `date` ที่ระบุ อาจมีการระบุ `culture` เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1
ดึงข้อมูลชื่อเดือน
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
