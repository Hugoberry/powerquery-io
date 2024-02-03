---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Cho biết giá trị datetime này có xuất hiện trong giây hiện tại hay không, khi được xác định bằng ngày và giờ hiện tại trong hệ thống.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Cho biết giá trị datetime cho trước <code>dateTime</code> có xuất hiện trong giây hiện tại hay không, khi được xác định bằng ngày và giờ hiện tại trên hệ thống.      <ul>      <li><code>dateTime</code>: Giá trị <code>datetime</code> hoặc <code>datetimezone</code> sẽ được đánh giá.</li>      </ul>


## Examples

### Example #1 
Xác định thời gian hệ thống hiện tại có tính bằng giây hiện tại hay không.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
