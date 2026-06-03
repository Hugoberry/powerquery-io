---
title: Date.StartOfYear
---

# Date.StartOfYear


Renvoie le début de l’année.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Renvoie le début de l’année qui contient `dateTime`. `dateTime` doit être une valeur `date`, `datetime`, ou `datetimezone`.


## Examples

### Example #1
Recherchez le début de l’année du 10 octobre 2011, 08:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
