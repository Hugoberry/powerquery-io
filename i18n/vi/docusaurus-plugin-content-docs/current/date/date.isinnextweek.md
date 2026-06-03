---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


Cho biết ngày này có xuất hiện trong tuần tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong tuần hiện tại.


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Remarks

Cho biết giá trị ngày giờ cho trước `dateTime` có xuất hiện trong tuần tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong tuần hiện tại.

-   `dateTime`: Giá trị `date`, `datetime` hoặc `datetimezone` sẽ được đánh giá.


## Examples

### Example #1
Xác định tuần sau thời gian hiện tại trên hệ thống có rơi vào tuần tiếp theo hay không.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
