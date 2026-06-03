---
title: Date.EndOfYear
---

# Date.EndOfYear


Yıl sonunu döndürür.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Remarks

Kesirlik saniyeler dahil olmak üzere `dateTime` içeren yıl sonunu döndürür. Saat dilimi bilgileri korunur.

-   `dateTime`: Kendisinden itibaren yılın sonunun hesaplandığı `date`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
14.05.2011 17:00:00 için yılın sonunu alır.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2
17.05.2011 19:00 için saatin sonunu alır.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
