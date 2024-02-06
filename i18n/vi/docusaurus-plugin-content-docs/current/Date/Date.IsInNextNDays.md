---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


Cho biết ngày này có xuất hiện trong những tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong ngày hiện tại.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Cho biết giá trị ngày giờ cho trước <code>dateTime</code> có xuất hiện trong những ngày tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong ngày hiện tại.      <ul>      <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> sẽ được đánh giá.</li>      <li><code>days</code>: Số ngày.</li>      </ul>


## Examples

### Example #1 
Xác định liệu ngày sau thời gian hiện tại trên hệ thống có thuộc hai ngày tiếp theo không.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
