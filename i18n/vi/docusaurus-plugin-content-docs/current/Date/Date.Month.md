---
title: Date.Month
---

# Date.Month


Trả về cấu phần tháng.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Trả về cấu phần tháng của giá trị <code>datetime</code> cho sẵn, <code>dateTime</code>.


## Examples

### Example #1 
Tìm tháng trong #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
