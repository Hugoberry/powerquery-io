---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Indica si aquesta data té lloc durant la setmana actual, determinada per la data i hora actuals del sistema.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime `dateTime` donat té lloc durant la setmana actual, determinada per la data i hora actuals del sistema.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` que s'ha d'avaluar.


## Examples

### Example #1
Determina si l'hora del sistema actual és en la setmana actual.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
