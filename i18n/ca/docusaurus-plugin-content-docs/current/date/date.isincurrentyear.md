---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Indica si aquesta data té lloc durant l'any actual, determinat per la data i hora actuals del sistema.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime `dateTime` donat té lloc durant l'any actual, determinat per la data i hora actuals del sistema.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` que s'ha d'avaluar.


## Examples

### Example #1
Determina si l'hora del sistema actual és en l'any actual.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
