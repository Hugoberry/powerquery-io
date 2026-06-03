---
title: Date.AddYears
---

# Date.AddYears


เพิ่มปีที่ระบุลงในวันที่


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

ส่งกลับผลลัพธ์ `วันที่`, `วันที่เวลา` หรือ `โซนวันที่เวลา` ของการเพิ่ม `numberOfYears` ลงในค่า `วันที่เวลา` `dateTime`

-   `dateTime`: ค่า `วันที่`, `วันที่เวลา` หรือ `โซนวันที่เวลา` ที่เพิ่มปี
-   `numberOfYears`: จำนวนปีที่จะเพิ่ม


## Examples

### Example #1
เพิ่ม 4 ปีลงในค่า `date`, `datetime` หรือ `datetimezone` ที่แสดงวันที่ 5/14/2011
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
เพิ่ม 10 ปีลงในค่า `date`, `datetime` หรือ `datetimezone` ที่แสดงวันที่และเวลา 5/14/2011 08:15:22 AM
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
