---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


ส่งกลับตัวเลขที่ระบุไตรมาสของปีซึ่งวันที่ตกอยู่ในไตรมาสนั้น


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

ส่งกลับตัวเลข 1 ถึง 4 ที่ระบุไตรมาสของปีซึ่งวันที่ `dateTime` ตกอยู่ในไตรมาสนั้น `dateTime` สามารถเป็นค่า `date`, `datetime` หรือ `datetimezone` ได้


## Examples

### Example #1
ค้นหาไตรมาสของปีซึ่งวันที่ #date(2011, 12, 31) ตกอยู่ในไตรมาสนั้น
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
