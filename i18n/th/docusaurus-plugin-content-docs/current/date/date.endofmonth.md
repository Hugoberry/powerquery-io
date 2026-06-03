---
title: Date.EndOfMonth
---

# Date.EndOfMonth


ส่งกลับจุดสิ้นสุดของเดือน


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

ส่งกลับจุดสิ้นสุดของเดือนที่มี `dateTime`

-   `dateTime`: ค่า `date`, `datetime`, or `datetimezone` ที่ใช้ในการคำนวณจุดสิ้นสุดของเดือน


## Examples

### Example #1
รับสิ้นสุดเดือนสำหรับ 5/14/2011 05:00:00 PM
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2
รับสิ้นสุดเดือนสำหรับ 5/17/2011 05:00:00 PM -7:00
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
