---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Indica si aquesta data té lloc durant el trimestre actual, determinat per la data i hora actuals del sistema.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime `dateTime` donat té lloc durant el trimestre actual, determinat per la data i hora actuals del sistema.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` que s'ha d'avaluar.


## Examples

### Example #1
Determina si l'hora del sistema actual és en el trimestre actual.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
