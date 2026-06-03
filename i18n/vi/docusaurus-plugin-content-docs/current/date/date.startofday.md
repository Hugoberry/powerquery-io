---
title: Date.StartOfDay
---

# Date.StartOfDay


Trả về thời gian đầu ngày.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Trả về thời gian đầu ngày được biểu thị bởi `dateTime`. `dateTime` phải là giá trị `date`, `datetime` hoặc `datetimezone`.


## Examples

### Example #1
Tìm thời gian đầu ngày cho ngày 10 tháng 10 năm 2011, 8:00 SA.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
