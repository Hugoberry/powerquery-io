---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


## Description

Cho biết ngày giờ này có xuất hiện trong giây trước hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong giây hiện tại.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Details

Cho biết giá trị ngày giờ cho trước <code>dateTime</code> có xuất hiện trong giây trước hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong giây hiện tại.      <ul>      <li><code>dateTime</code>: Giá trị <code>datetime</code> hoặc <code>datetimezone</code> sẽ được đánh giá.</li>      </ul>


## Examples

### Example #1 
Xác định giây trước thời gian hệ thống hiện tại có tính bằng giây trước hay không.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
