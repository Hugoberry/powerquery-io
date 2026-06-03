---
title: Time.StartOfHour
---

# Time.StartOfHour


Trả về thời gian đầu giờ.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Trả về thời gian đầu giờ được biểu thị bởi `dateTime`. `dateTime` phải là giá trị `date`, `datetime` hoặc `datetimezone`.


## Examples

### Example #1
Tìm thời gian đầu giờ cho ngày 10 tháng 10 năm 2011, 8:10:32 SA.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
