---
title: Date.StartOfDay
---

# Date.StartOfDay


Vráti začiatok dňa.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Vráti začiatok dňa, ktorý predstavuje hodnota `dateTime`. `dateTime` musí byť hodnota `date`, `datetime` alebo `datetimezone`.


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
