---
title: Date.AddDays
---

# Date.AddDays


เพิ่มวันที่ระบุลงในวันที่


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

ส่งกลับผลลัพธ์ `date`, `datetime` หรือ `datetimezone` จากการเพิ่ม `numberOfDays` วันลงในค่า `datetime` `dateTime`

-   `dateTime`: ค่า `date`, `datetime` หรือ `datetimezone` ที่วันถูกเพิ่ม
-   `numberOfDays`: จำนวนวันที่จะเพิ่ม


## Examples

### Example #1
เพิ่ม 5 วันลงในค่า `date`, `datetime` หรือ `datetimezone` ที่แสดงวันที่ 5/14/2011
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
