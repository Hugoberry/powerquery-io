---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Trả về thời gian đầu quý.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Trả về thời gian đầu quý chứa <code>dateTime</code>.    <code>dateTime</code> phải là giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code>.


## Examples

### Example #1 
Tìm thời gian đầu quý cho ngày 10 tháng 10 năm 2011, 8:00 SA.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
