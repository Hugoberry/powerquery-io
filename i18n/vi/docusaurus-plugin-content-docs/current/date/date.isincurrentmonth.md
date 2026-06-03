---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Cho biết ngày này có diễn ra trong tháng hiện tại hay không, như được xác định bằng ngày và giờ hiện tại trên hệ thống.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Cho biết giá trị datetime cho sẵn `dateTime` có rơi vào tháng hiện tại hay không, như được xác định bởi ngày và giờ hiện tại trên hệ thống.

-   `dateTime`: Một giá trị `date`, `datetime` hoặc `datetimezone` sẽ được đánh giá.


## Examples

### Example #1
Xác định thời gian hiện tại trên hệ thống có rơi vào tháng hiện tại hay không.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
