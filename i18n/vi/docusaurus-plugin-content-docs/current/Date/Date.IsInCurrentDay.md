---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Cho biết ngày này có diễn ra trong ngày hiện tại hay không, như được xác định bằng ngày và giờ hiện tại trên hệ thống.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Cho biết giá trị datetime cho sẵn <code>dateTime</code> có rơi vào ngày hiện tại hay không, như được xác định bởi ngày và giờ hiện tại trên hệ thống.      <ul>      <li><code>dateTime</code>: Một giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> sẽ được đánh giá.</li>      </ul>


## Examples

### Example #1 
Xác định thời gian hiện tại trên hệ thống có rơi vào ngày hiện tại không.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
