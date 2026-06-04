---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Vráti číslo udávajúce štvrťrok v roku, do ktorého spadá príslušný dátum.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Vráti číslo od 1 do 4 udávajúce štvrťrok v roku, do ktorého spadá dátum `dateTime`. `dateTime` môže byť hodnota `date`, `datetime` alebo `datetimezone`.


## Examples

### Example #1
Nájdite štvrťrok v roku, do ktorého spadá dátum #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
