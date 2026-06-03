---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Cho biết ngày này có diễn ra trong năm hiện tại hay không, như được xác định bằng ngày và giờ hiện tại trên hệ thống.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Cho biết giá trị datetime cho sẵn `dateTime` có rơi vào năm hiện tại hay không, như được xác định bởi ngày và giờ hiện tại trên hệ thống.

-   `dateTime`: Một giá trị `date`, `datetime` hoặc `datetimezone` sẽ được đánh giá.


## Examples

### Example #1
Xác định thời gian hiện tại trên hệ thống có rơi vào năm hiện tại không.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
