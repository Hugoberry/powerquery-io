---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Cho biết ngày giờ này có xuất hiện trong những phút tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong phút hiện tại.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Cho biết giá trị datetime cho trước `dateTime` có xuất hiện trong những phút tiếp theo hay không, khi được xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong phút hiện tại.

-   `dateTime`: Giá trị `datetime` hoặc `datetimezone` sẽ được đánh giá.
-   `minutes`: Số phút.


## Examples

### Example #1
Xác định phút sau thời gian hệ thống hiện tại có tính bằng hai phút tiếp theo hay không.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
