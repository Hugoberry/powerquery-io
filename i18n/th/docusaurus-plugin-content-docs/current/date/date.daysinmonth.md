---
title: Date.DaysInMonth
---

# Date.DaysInMonth


ส่งกลับตัวเลขตั้งแต่ 28 ถึง 31 ที่ระบุจำนวนวันในเดือน


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

ส่งกลับจำนวนวันในเดือนในค่า `วันที่`, `วันที่เวลา` หรือ `โซนวันที่เวลา` e `dateTime`.

-   `dateTime`: ค่า `วันที่`, `วันที่เวลา` หรือ `โซนวันที่เวลา` ที่จำนวนวันในเดือนถูกส่งกลับ


## Examples

### Example #1
จำนวนวันในเดือนธันวาคมตามที่แสดงโดย `#date(2011, 12, 01)`
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
