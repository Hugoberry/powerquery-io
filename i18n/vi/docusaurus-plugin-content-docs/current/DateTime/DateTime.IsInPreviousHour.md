---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


## Description

Cho biết ngày giờ này có xuất hiện trong giờ trước đó hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong giờ hiện tại.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Details

Cho biết giá trị ngày giờ cho trước <code>dateTime</code> có xuất hiện trong giờ trước hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thông. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong giờ hiện tại.      <ul>      <li><code>dateTime</code>: Giá trị <code>datetime</code> hoặc <code>datetimezone</code> sẽ được đánh giá.</li>      </ul>


## Examples

### Example #1 
Xác định giờ trước thời gian hệ thống hiện tại có tính bằng giờ trước hay không.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
