---
title: Date.AddQuarters
---

# Date.AddQuarters


เพิ่มไตรมาสที่ระบุลงในวันที่


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

ส่งกลับผลลัพธ์ `date`, `datetime` หรือ `datetimezone` จากการเพิ่ม `numberOfQuarters` ไตรมาสลงในค่า `datetime` `dateTime`

-   `dateTime`: ค่า `date`, `datetime` หรือ `datetimezone` ที่ไตรมาสถูกเพิ่ม
-   `numberOfQuarters`: จำนวนไตรมาสที่จะเพิ่ม


## Examples

### Example #1
เพิ่ม 1 ไตรมาสลงในค่า `date`, `datetime` หรือ `datetimezone` ที่แสดงวันที่ 5/14/2011
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
