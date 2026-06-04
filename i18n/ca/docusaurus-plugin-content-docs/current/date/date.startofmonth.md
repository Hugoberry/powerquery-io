---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Retorna l'inici del mes.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Retorna l'inici del mes que conté el dia `dateTime`. `dateTime` ha de ser un valor `date` o `datetime`.


## Examples

### Example #1
Cerca l'inici del mes per al 10 d'octubre de 2011, 8:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
