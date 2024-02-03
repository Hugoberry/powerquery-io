---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

Cho biết ngày này có diễn ra trong tuần hiện tại hay không, như được xác định bằng ngày và giờ hiện tại trên hệ thống.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

Cho biết giá trị datetime cho sẵn <code>dateTime</code> có rơi vào tuần hiện tại hay không, như được xác định bởi ngày và giờ hiện tại trên hệ thống.      <ul>      <li><code>dateTime</code>: Một giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> sẽ được đánh giá.</li>      </ul>


## Examples

### Example #1 
Xác định thời gian hiện tại trên hệ thống có rơi vào tuần hiện tại không.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
