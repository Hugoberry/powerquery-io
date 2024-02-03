---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


## Description

Cho biết ngày này có xuất hiện trong những ngày trước đó hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong ngày hiện tại.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Cho biết giá trị ngày giờ cho trước <code>dateTime</code> có xuất hiện trong những ngày trước đó hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong ngày hiện tại.      <ul>      <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> sẽ được đánh giá.</li>      <li><code>days</code>: Số ngày.</li>      </ul>


## Examples

### Example #1 
Xác định liệu ngày trước thời gian hiện tại trên hệ thống có thuộc hai ngày trước không.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
