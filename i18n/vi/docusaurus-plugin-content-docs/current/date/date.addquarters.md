---
title: Date.AddQuarters
---

# Date.AddQuarters


Thêm các quý được chỉ định vào ngày.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Trả về kết quả `date`, `datetime` hoặc `datetimezone` khi thêm `numberOfQuarters` quý vào giá trị `datetime``dateTime`.

-   `dateTime`: Giá trị `date`, `datetime` hoặc `datetimezone` mà các quý đang được thêm.
-   `numberOfQuarters`: Số quý sẽ thêm.


## Examples

### Example #1
Thêm 1 quý vào giá trị `date`, `datetime` hoặc `datetimezone` biểu thị ngày 5/14/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
