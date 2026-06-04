---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Retorna l'inici del trimestre.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Retorna l'inici del trimestre que conté el dia `dateTime`. `dateTime` ha de ser un valor `date`, `datetime` o `datetimezone`.


## Examples

### Example #1
Cerca l'inici del trimestre per al 10 d'octubre de 2011, 8:00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
