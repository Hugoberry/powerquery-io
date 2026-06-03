---
title: Date.AddDays
---

# Date.AddDays


Thêm các ngày được chỉ định vào ngày.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Trả về kết quả `date`, `datetime` hoặc `datetimezone` khi thêm `numberOfDays` ngày vào giá trị `datetime``dateTime`.

-   `dateTime`: Giá trị `date`, `datetime` hoặc `datetimezone` mà các ngày đang được thêm.
-   `numberOfDays`: Số ngày sẽ thêm.


## Examples

### Example #1
Thêm 5 ngày vào giá trị `date`, `datetime` hoặc `datetimezone` biểu thị ngày 5/14/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
