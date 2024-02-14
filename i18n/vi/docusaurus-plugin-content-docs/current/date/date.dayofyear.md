---
title: Date.DayOfYear
---

# Date.DayOfYear


Trả về một số từ 1 đến 366 biểu thị ngày trong năm.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Trả về một số biểu thị ngày trong năm trong giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> cho sẵn, <code>dateTime</code>.


## Examples

### Example #1 
Ngày trong năm cho ngày 1 tháng 3 năm 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
