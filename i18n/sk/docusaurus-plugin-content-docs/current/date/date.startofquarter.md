---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Vráti začiatok štvrťroka.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Vráti začiatok štvrťroka, ktorý obsahuje hodnotu `dateTime`. `dateTime` musí byť hodnota `date`, `datetime` alebo `datetimezone`.


## Examples

### Example #1
Nájdite začiatok štvrťroka pre dátum 10. október 2011 a čas 8:00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
