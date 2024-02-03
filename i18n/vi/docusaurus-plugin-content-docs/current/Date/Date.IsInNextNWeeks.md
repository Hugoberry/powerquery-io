---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


## Description

Cho biết ngày này có xuất hiện trong những tuần tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong tuần hiện tại.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Cho biết giá trị ngày giờ cho trước <code>dateTime</code> có xuất hiện trong những tuần tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong tuần hiện tại.      <ul>      <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> sẽ được đánh giá.</li>      <li><code>weeks</code>: Số tuần.</li>      </ul>


## Examples

### Example #1 
Xác định liệu tuần sau thời gian hiện tại trên hệ thống có thuộc hai tuần tiếp theo không.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
