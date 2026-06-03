---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Cho biết ngày này có diễn ra trong quý hiện tại hay không, như được xác định bằng ngày và giờ hiện tại trên hệ thống.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Cho biết giá trị datetime cho sẵn `dateTime` có rơi vào quý hiện tại hay không, như được xác định bởi ngày và giờ hiện tại trên hệ thống.

-   `dateTime`: Một giá trị `date`, `datetime` hoặc `datetimezone` sẽ được đánh giá.


## Examples

### Example #1
Xác định thời gian hiện tại trên hệ thống có rơi vào quý hiện tại hay không.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
