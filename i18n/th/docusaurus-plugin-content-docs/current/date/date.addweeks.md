---
title: Date.AddWeeks
---

# Date.AddWeeks


เพิ่มสัปดาห์ที่ระบุลงในวันที่


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

ส่งกลับผลลัพธ์ `date`, `datetime` หรือ `datetimezone` จากการเพิ่ม `numberOfWeeks` สัปดาห์ลงในค่า `datetime` `dateTime`

-   `dateTime`: ค่า `date`, `datetime` หรือ `datetimezone` ที่สัปดาห์ถูกเพิ่ม
-   `numberOfWeeks`: จำนวนสัปดาห์ที่จะเพิ่ม


## Examples

### Example #1
เพิ่ม 2 สัปดาห์ลงในค่า `date`, `datetime` หรือ `datetimezone` ที่แสดงวันที่ 5/14/2011
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
