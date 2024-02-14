---
title: Date.DayOfYear
---

# Date.DayOfYear


ส่งกลับตัวเลขตั้งแต่ 1 ถึง 366 ที่แสดงถึงวันของปี


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

ส่งกลับตัวเลขที่แสดงวันของปีในค่า <code>date</code>, <code>datetime</code> หรือ <code>datetimezone</code> ที่ระบุ <code>dateTime</code>


## Examples

### Example #1 
วันของปีสําหรับวันที่ 1 มีนาคม 2011
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
