---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Cho biết ngày này có xuất hiện trong những quý tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong quý hiện tại.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Cho biết giá trị ngày giờ cho trước <code>dateTime</code> có xuất hiện trong những quý tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong quý hiện tại.      <ul>      <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> sẽ được đánh giá.</li>      <li><code>quarters</code>: Số quý.</li>      </ul>


## Examples

### Example #1 
Xác định liệu quý sau thời gian hiện tại trên hệ thống có thuộc hai quý tiếp theo không.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
