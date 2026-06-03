---
title: DateTime.Date
---

# DateTime.Date


Trả về thành phần ngày của giá trị date, datetime hoặc datetimezone cho sẵn.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Trả về thành phần ngày của tham số `dateTime` nếu tham số này là một giá trị `ngày`, `ngày giờ` hoặc `ngày múi giờ` hoặc `null` nếu tham số này là `null`.


## Examples

### Example #1
Tìm giá trị ngày của #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
