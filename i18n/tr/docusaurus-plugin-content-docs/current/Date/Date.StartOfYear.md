---
title: Date.StartOfYear
---

# Date.StartOfYear


Yıl başlangıcını döndürür.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

<code>dateTime</code> içeren yıl başlangıcını döndürür.    <code>dateTime</code>, bir <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri olmalıdır.


## Examples

### Example #1 
10 Ekim 2011, 08:10:32 için yıl başlangıcını bulun.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
