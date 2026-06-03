---
title: Date.Day
---

# Date.Day


Trả về cấu phần ngày.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Trả về cấu phần ngày của giá trị `date`, `datetime`, hoặc `datetimezone`.

-   `dateTime`: Giá trị `date`, `datetime`, hoặc `datetimezone` mà từ đó cấu phần ngày được trích xuất.


## Examples

### Example #1
Nhận cấu phần ngày của giá trị `date`, `datetime` hoặc `datetimezone` biểu thị ngày và giờ là 5/14/2011 05:00:00 CH.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
