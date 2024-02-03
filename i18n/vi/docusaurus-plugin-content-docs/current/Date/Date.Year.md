---
title: Date.Year
---

# Date.Year


## Description

Trả về cấu phần năm.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Trả về cấu phần năm của giá trị <code>datetime</code> cho sẵn, <code>dateTime</code>.


## Examples

### Example #1 
Tìm năm trong #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
