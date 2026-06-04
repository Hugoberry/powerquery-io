---
title: Date.StartOfYear
---

# Date.StartOfYear


Retorna l'inici de l'any.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Retorna l'inici de l'any que conté el dia `dateTime`. `dateTime` ha de ser un valor `date`, `datetime` o `datetimezone`.


## Examples

### Example #1
Cerca l'inici de l'any per al 10 d'octubre de 2011, 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
