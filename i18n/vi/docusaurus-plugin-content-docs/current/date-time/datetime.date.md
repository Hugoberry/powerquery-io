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

Trả về cấu phần ngày của <code>dateTime</code>, giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code> cho sẵn.


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
