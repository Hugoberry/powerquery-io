---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Trả về một số từ 28 tới 31 biểu thị số ngày trong tháng.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Trả về số ngày trong tháng trong giá trị `date`, `datetime`, hoặc `datetimezone` `dateTime`.

-   `dateTime`: Giá trị `date`, `datetime`, hoặc `datetimezone` mà từ đó trả về số ngày trong tháng.


## Examples

### Example #1
Số ngày trong tháng 12 như được biểu thị bởi `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
