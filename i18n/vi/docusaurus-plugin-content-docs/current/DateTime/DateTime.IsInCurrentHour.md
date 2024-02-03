---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Cho biết giá trị datetime này có xuất hiện hay trong giờ hiện tại hay không, khi được xác định bằng ngày và giờ hiện tại trên hệ thống.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Cho biết giá trị datetime đã cho <code>dateTime</code> có xuất hiện trong giờ hiện tại hay không, khi được xác định bằng ngày và giờ hiện tại trên hệ thống.      <ul>      <li><code>dateTime</code>:  Giá trị <code>datetime</code> hoăc <code>datetimezone</code> sẽ được đánh giá.</li>      </ul>


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
