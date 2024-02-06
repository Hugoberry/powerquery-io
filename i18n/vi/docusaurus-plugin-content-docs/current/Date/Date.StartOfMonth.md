---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Trả về thời gian đầu tháng.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Trả về thời gian đầu tháng chứa <code>dateTime</code>.    <code>dateTime</code> phải là giá trị <code>date</code> hoặc <code>datetime</code>.


## Examples

### Example #1 
Tìm thời gian đầu tháng cho ngày 10 tháng 10 năm 2011, 8:10:32 SA.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
