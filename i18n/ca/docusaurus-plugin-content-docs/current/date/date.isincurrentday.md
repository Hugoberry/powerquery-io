---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Indica si aquesta data té lloc durant el dia actual, determinat per la data i hora actuals del sistema.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime `dateTime` donat té lloc durant el dia actual, determinat per la data i hora actuals del sistema.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` que s'ha d'avaluar.


## Examples

### Example #1
Determina si l'hora del sistema actual és en el dia actual.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
