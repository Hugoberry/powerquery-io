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

Cho biết giá trị datetime cho sẵn <code>dateTime</code> có rơi vào năm hiện tại hay không và vào đúng hay trước ngày hiện tại, như được xác định bởi ngày và giờ hiện tại trên hệ thống.      <ul>      <li><code>dateTime</code>: Một giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> sẽ được đánh giá.</li>      </ul>


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
