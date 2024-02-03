---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Vráti začiatok dňa.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

Vráti začiatok dňa, ktorý predstavuje hodnota <code>dateTime</code>.    <code>dateTime</code> musí byť hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>.


## Examples

### Example #1 
Nájdite začiatok dňa pre dátum 10. október 2011 a čas 8:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
