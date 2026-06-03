---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Çeyrek başlangıcını döndürür.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

`dateTime` içeren çeyrek başlangıcını döndürür. `dateTime`, bir `date`, `datetime` veya `datetimezone` değeri olmalıdır.


## Examples

### Example #1
10 Ekim 2011, 08:00 için çeyrek başlangıcını bulun.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
