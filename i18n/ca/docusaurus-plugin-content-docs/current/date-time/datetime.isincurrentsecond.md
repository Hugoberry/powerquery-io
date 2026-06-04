---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Indica si aquest datetime es produeix durant el segon actual, segons ho determinen la data i hora actuals al sistema.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime especificat `dateTime` es produeix durant el segon actual, segons ho determinen la data i hora actuals al sistema.

-   `dateTime`: un valor `datetime` o `datetimezone` que s'ha d'avaluar.


## Examples

### Example #1
Determina si l'hora del sistema actual es troba al segon actual.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
