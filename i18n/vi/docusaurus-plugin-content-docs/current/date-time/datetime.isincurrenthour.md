---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Cho biết giá trị datetime này có xuất hiện hay trong giờ hiện tại hay không, khi được xác định bằng ngày và giờ hiện tại trên hệ thống.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Cho biết giá trị datetime đã cho `dateTime` có xuất hiện trong giờ hiện tại hay không, khi được xác định bằng ngày và giờ hiện tại trên hệ thống.

-   `dateTime`: Giá trị `datetime` hoăc `datetimezone` sẽ được đánh giá.


## Examples

### Example #1
Xác định thời gian hệ thống hiện tại có tính bằng giờ hiện tại hay không.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
