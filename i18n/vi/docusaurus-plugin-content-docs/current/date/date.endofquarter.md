---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Trả về thời gian cuối quý.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Trả về thời gian cuối quý chứa `dateTime`. Thông tin múi giờ được bảo toàn.

-   `dateTime`: Giá trị `date`, `datetime` hoặc `datetimezone` mà từ đó tính toán ra thời gian cuối quý.


## Examples

### Example #1
Tìm thời gian cuối quý cho ngày 10 tháng 10 năm 2011, 8:00 SA.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
