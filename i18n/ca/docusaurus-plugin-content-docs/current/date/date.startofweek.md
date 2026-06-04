---
title: Date.StartOfWeek
---

# Date.StartOfWeek


Retorna l'inici de la setmana.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Retorna l'inici de la setmana que conté el dia `dateTime`. `dateTime` ha de ser un valor `date`, `datetime` o `datetimezone`.


## Examples

### Example #1
Troba l'inici de la setmana per a dimarts, 11 d'octubre de 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2
Troba l'inici de la setmana per a dimarts, 11 d'octubre de 2011, amb dilluns com a inici de la setmana.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
