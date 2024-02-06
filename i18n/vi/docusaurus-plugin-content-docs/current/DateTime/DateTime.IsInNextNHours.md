---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


Cho biết ngày giờ này có xuất hiện trong những giờ tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong giờ hiện tại.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Cho biết giá trị datetime cho trước <code>dateTime</code> có xuất hiện trong những giờ tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong giờ hiện tại.      <ul>      <li><code>dateTime</code>: Giá trị <code>datetime</code> hoặc <code>datetimezone</code> sẽ được đánh giá.</li>      <li><code>hours</code>: Số giờ.</li>      </ul>


## Examples

### Example #1 
Xác định giờ sau thời gian hệ thống hiện tại có tính bằng hai giờ tiếp theo hay không.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
