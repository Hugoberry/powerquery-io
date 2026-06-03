---
title: Date.Year
---

# Date.Year


Trả về cấu phần năm.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Trả về cấu phần năm của giá trị `datetime` cho sẵn, `dateTime`.


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
