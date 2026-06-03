---
title: Date.Day
---

# Date.Day


ส่งกลับคอมโพเนนต์วัน


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

ส่งคืนคอมโพเนนต์วันของค่า `วันที่`, `วันที่เวลา` หรือ `โซนวันที่เวลา`

-   `dateTime`: ค่า `วันที่`, `วันที่เวลา` หรือ `โซนวันที่เวลา` ที่คอมโพเนนต์วันถูกแยก


## Examples

### Example #1
รับคอมโพเนนต์วันของค่า `date`, `datetime` หรือ `datetimezone` ที่แสดงวันที่และเวลา 5/14/2011 05:00:00 PM
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
