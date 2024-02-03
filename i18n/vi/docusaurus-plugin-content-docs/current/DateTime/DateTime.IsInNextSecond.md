---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


## Description

Cho biết ngày giờ này có xuất hiện trong giây tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong giây hiện tại.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Details

Cho biết giá trị ngày giờ cho trước <code>dateTime</code> có xuất hiện trong giây tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong giây hiện tại.      <ul>      <li><code>dateTime</code>: Giá trị <code>datetime</code> hoặc <code>datetimezone</code> sẽ được đánh giá.</li>      </ul>


## Examples

### Example #1 
Xác định giây sau thời gian hệ thống hiện tại có tính bằng giây tiếp theo hay không.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
