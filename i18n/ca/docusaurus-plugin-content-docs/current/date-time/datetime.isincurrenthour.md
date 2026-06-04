---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Indica si aquest datetime es produeix durant l'hora actual, segons ho determinen la data i hora actuals al sistema.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime especificat `dateTime` es produeix durant l'hora actual, segons ho determinen la data i hora actuals al sistema.

-   `dateTime`: un valor `datetime` o `datetimezone` que s'ha d'avaluar.


## Examples

### Example #1
Determina si l'hora del sistema actual es troba a l'hora actual.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
