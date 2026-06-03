---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Çeyrek sonunu döndürür.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

`dateTime` içeren çeyrek sonunu döndürür. Saat dilimi bilgileri korunur.

-   `dateTime`: Kendisinden itibaren çeyreğin sonunun hesaplandığı `date`, `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
10 Ekim 2011, 08:00 için çeyrek sonunu bulun.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
