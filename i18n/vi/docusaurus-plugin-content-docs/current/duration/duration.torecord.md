---
title: Duration.ToRecord
---

# Duration.ToRecord


Trả về một bản ghi chứa các phần của khoảng thời gian này.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Trả về một bản ghi chứa các phần của giá trị khoảng thời gian, `duration`.

-   `duration`: `duration` mà từ đó bản ghi được tạo.


## Examples

### Example #1
Chuyển đổi `#duration(2, 5, 55, 20)` thành một bản ghi các phần của giá trị này, bao gồm số ngày, số giờ, số phút và số giây nếu áp dụng.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
