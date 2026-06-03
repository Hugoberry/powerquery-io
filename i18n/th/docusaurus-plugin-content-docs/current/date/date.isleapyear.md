---
title: Date.IsLeapYear
---

# Date.IsLeapYear


ระบุว่าวันที่นี้ตกอยู่ในปีอธิกสุรทินหรือไม่


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลาที่ระบุ `dateTime` ตกอยู่ในปีอธิกสุรทินหรือไม่

-   `dateTime`: ค่า `วันที่`, `วันที่เวลา` หรือ `โซนวันที่เวลา` ที่จะประเมิน


## Examples

### Example #1
ระบุว่าปี 2012 ตามที่แสดงโดย `#date(2012, 01, 01)` เป็นปีอธิกสุรทินหรือไม่
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
