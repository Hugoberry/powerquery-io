---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Indica si aquesta data té lloc durant l'any actual i cau el dia actual o abans del dia actual, determinat per la data i hora actuals del sistema.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime `dateTime` donat té lloc durant l'any actual i cau el dia actual o abans del dia actual, determinat per la data i hora actuals del sistema.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` que s'ha d'avaluar.


## Examples

### Example #1
Determina si l'hora del sistema actual és en aquest any fins ara.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
