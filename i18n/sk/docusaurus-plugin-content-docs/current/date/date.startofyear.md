---
title: Date.StartOfYear
---

# Date.StartOfYear


Vráti začiatok roka.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Vráti začiatok roka, ktorý obsahuje hodnotu `dateTime`. `dateTime` musí byť hodnota `date`, `datetime` alebo `datetimezone`.


## Examples

### Example #1
Nájdite začiatok roka pre dátum 10. október 2011 a čas 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
