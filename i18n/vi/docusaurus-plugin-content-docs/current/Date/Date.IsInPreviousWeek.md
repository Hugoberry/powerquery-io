---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


## Description

Cho biết ngày này có xuất hiện trong tuần trước đó hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong tuần hiện tại.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Details

Cho biết giá trị ngày giờ cho trước <code>dateTime</code> có xuất hiện trong tuần trước đó hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong tuần hiện tại.      <ul>      <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> sẽ được đánh giá.</li>      </ul>


## Examples

### Example #1 
Xác định tuần trước thời gian hiện tại trên hệ thống có rơi vào tuần trước hay không.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
