---
title: Date.AddMonths
---

# Date.AddMonths


เพิ่มเดือนที่ระบุลงในวันที่


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

ส่งกลับผลลัพธ์ `วันที่`, `วันที่เวลา` หรือ `โซนวันที่เวลา` จากการเพิ่ม `numberOfMonths` เดือนลงในค่า `วันที่เวลา` `dateTime`

-   `dateTime`: ค่า `วันที่`, `วันที่เวลา` หรือ `โซนวันที่เวลา` ที่เพิ่มเดือน
-   `numberOfMonths`: จำนวนเดือนที่จะเพิ่ม


## Examples

### Example #1
เพิ่ม 5 เดือนลงในค่า `date`, `datetime` หรือ `datetimezone` ที่แสดงวันที่ 5/14/2011
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
เพิ่ม 18 เดือนลงในค่า `date`, `datetime` หรือ `datetimezone` ที่แสดงวันที่และเวลา 5/14/2011 08:15:22 AM
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
