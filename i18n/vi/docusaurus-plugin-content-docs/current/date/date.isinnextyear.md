---
title: Date.IsInNextYear
---

# Date.IsInNextYear


Cho biết ngày này có xuất hiện trong năm tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong năm hiện tại.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Remarks

Cho biết giá trị ngày giờ cho trước `dateTime` có xuất hiện trong năm tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong năm hiện tại.

-   `dateTime`: Giá trị `date`, `datetime` hoặc `datetimezone` sẽ được đánh giá.


## Examples

### Example #1
Xác định năm sau thời gian hiện tại trên hệ thống có rơi vào năm tiếp theo hay không.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
