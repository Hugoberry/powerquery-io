---
title: Date.AddYears
---

# Date.AddYears


Thêm các năm được chỉ định vào ngày.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Trả về kết quả `date`, `datetime`, hoặc `datetimezone` khi thêm `numberOfYears` vào giá trị `datetime` `dateTime`.

-   `dateTime`: Giá trị `date`, `datetime`, hoặc `datetimezone` đã thêm năm vào.
-   `numberOfYears`: Số năm cần thêm.


## Examples

### Example #1
Thêm 4 năm vào giá trị `date`, `datetime` hoặc `datetimezone` biểu thị giá trị 5/14/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Thêm 10 năm vào giá trị `date`, `datetime` hoặc `datetimezone` biểu thị ngày và giờ là 5/14/2011 08:15:22 SA.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
