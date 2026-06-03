---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Trả về thời gian cuối tháng.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

Trả về thời gian cuối tháng gồm `dateTime`.

-   `dateTime`: Giá trị `date`, `datetime` hoặc `datetimezone` mà từ đó tính toán ra thời gian cuối tháng.


## Examples

### Example #1
Nhận thời gian kết thúc tháng cho 5/14/2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2
Nhận thời gian kết thúc tháng cho 17/05/2011 05:00:00 CH -7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
