---
title: Date.AddMonths
---

# Date.AddMonths


Thêm các tháng được chỉ định vào ngày.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Trả về kết quả `date`, `datetime`, hoặc `datetimezone` khi thêm `numberOfMonths` tháng vào giá trị `datetime` `dateTime`.

-   `dateTime`: Giá trị `date`, `datetime`, hoặc `datetimezone` đã thêm số tháng vào.
-   `numberOfMonths`: Số tháng cần thêm.


## Examples

### Example #1
Thêm 5 tháng vào giá trị `date`, `datetime` hoặc `datetimezone` biểu thị ngày 5/14/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Thêm 18 tháng vào giá trị `date`, `datetime` hoặc `datetimezone` biểu thị ngày và giờ là 5/14/2011 08:15:22 SA.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
