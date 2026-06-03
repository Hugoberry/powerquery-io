---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Cho biết ngày này có rơi vào năm hiện tại hay không và vào đúng hay trước ngày hiện tại, như được xác định bởi ngày và giờ hiện tại trên hệ thống.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Cho biết giá trị datetime cho sẵn `dateTime` có rơi vào năm hiện tại hay không và vào đúng hay trước ngày hiện tại, như được xác định bởi ngày và giờ hiện tại trên hệ thống.

-   `dateTime`: Một giá trị `date`, `datetime` hoặc `datetimezone` sẽ được đánh giá.


## Examples

### Example #1
Xác định thời gian hiện tại trên hệ thống có rơi vào năm tính tới thời điểm hiện tại hay không.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
