---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Trả về thời gian đầu năm.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Trả về thời gian đầu năm chứa <code>dateTime</code>.    <code>dateTime</code> phải là giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code>.


## Examples

### Example #1 
Tìm thời gian đầu năm cho ngày 10 tháng 10 năm 2011, 8:10:32 SA.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
