---
title: Date.EndOfDay
---

# Date.EndOfDay


Trả về thời gian cuối ngày.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

Trả về thời gian cuối ngày được biểu thị bởi <code>dateTime</code>. Thông tin múi giờ được bảo toàn.      <ul>      <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> mà từ đó tính toán ra thời gian cuối ngày.</li>      </ul>


## Examples

### Example #1 
Nhận giá trị thời gian kết thúc ngày cho 5/14/2011 05:00:00 CH.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Nhận thời gian cuối ngày cho 5/17/2011 05:00:00 CH -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
