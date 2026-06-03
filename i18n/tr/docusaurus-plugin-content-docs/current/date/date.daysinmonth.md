---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Aydaki gün sayısını gösteren 28 ile 31 arasında bir sayı döndürür.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

`date`, `datetime` veya `datetimezone` değeri olan `dateTime` öğesindeki ay içinde bulunan gün sayısını döndürür.

-   `dateTime`: Aydaki gün sayısının döndürüldüğü bir `date`, `datetime` veya `datetimezone`değeri.


## Examples

### Example #1
`#date(2011, 12, 01)` ile gösterilen, Aralık ayındaki gün sayısı.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
