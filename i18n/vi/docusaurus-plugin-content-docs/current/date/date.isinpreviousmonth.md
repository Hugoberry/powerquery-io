---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


Cho biết ngày này có xuất hiện trong tháng trước đó hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong tháng hiện tại.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Remarks

Cho biết giá trị ngày giờ cho trước `dateTime` có xuất hiện trong tháng trước đó hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong tháng hiện tại.

-   `dateTime`: Giá trị `date`, `datetime` hoặc `datetimezone` sẽ được đánh giá.


## Examples

### Example #1
Xác định tháng trước thời gian hiện tại trên hệ thống có rơi vào tháng trước hay không.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
