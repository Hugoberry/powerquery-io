---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

Cho biết ngày này có xuất hiện trong những năm tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong năm hiện tại.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Cho biết giá trị ngày giờ cho trước <code>dateTime</code> có xuất hiện trong những năm tiếp theo hay không, khi xác định bằng ngày và giờ hiện tại trên hệ thống. Lưu ý rằng hàm này sẽ trả về false khi bạn thông qua giá trị sẽ xuất hiện trong năm hiện tại.      <ul>      <li><code>dateTime</code>: Giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> sẽ được đánh giá.</li>      <li><code>years</code>: Số năm.</li>      </ul>


## Examples

### Example #1 
Xác định liệu năm sau thời gian hiện tại trên hệ thống có thuộc hai năm tiếp theo không.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
