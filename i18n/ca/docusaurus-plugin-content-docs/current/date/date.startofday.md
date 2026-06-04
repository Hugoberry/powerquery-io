---
title: Date.StartOfDay
---

# Date.StartOfDay


Retorna l'inici del dia.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Retorna l'inici del dia representat per `dateTime`. `dateTime` ha de ser un valor `date`, `datetime` o `datetimezone`.


## Examples

### Example #1
Cerca l'inici del dia per al 10 d'octubre de 2011, 8:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
