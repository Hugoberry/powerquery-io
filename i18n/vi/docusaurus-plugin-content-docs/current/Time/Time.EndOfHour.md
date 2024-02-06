---
title: Time.EndOfHour
---

# Time.EndOfHour


Trả về thời gian cuối giờ.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Trả về thời gian cuối giờ được biểu thị bằng <code>dateTime</code>, bao gồm cả số giây ở dạng phân số. Thông tin múi giờ được bảo toàn.      <ul>        <li><code>dateTime</code>: Giá trị <code>time</code>, <code>datetime</code> hoặc <code>datetimezone</code> mà từ đó tính toán ra thời gian cuối giờ.</li>      </ul>


## Examples

### Example #1 
Nhận thời gian kết thúc của giờ cho 5/14/2011 05:00:00 CH.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Nhận thời gian kết thúc của giờ cho 5/17/2011 05:00:00 PM -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
