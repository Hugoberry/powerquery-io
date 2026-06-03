---
title: Date.AddWeeks
---

# Date.AddWeeks


Thêm các tuần được chỉ định vào ngày.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Trả về kết quả `date`, `datetime` hoặc `datetimezone` khi thêm `numberOfWeeks` tuần vào giá trị `datetime``dateTime`.

-   `dateTime`: Giá trị `date`, `datetime` hoặc `datetimezone` mà các tuần đang được thêm.
-   `numberOfWeeks`: Số tuần sẽ thêm.


## Examples

### Example #1
Thêm 2 tuần vào giá trị `date`, `datetime` hoặc `datetimezone` biểu thị ngày 5/14/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
