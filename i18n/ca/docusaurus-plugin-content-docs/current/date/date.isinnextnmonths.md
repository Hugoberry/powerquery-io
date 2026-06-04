---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Indica si aquesta data es produeix durant els mesos següents, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el mes actual.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Indica si el valor de data i hora `dateTime` especificat es produeix durant els mesos següents, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el mes actual.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` que s'ha d'avaluar.
-   `months`: nombre de mesos.


## Examples

### Example #1
Determina si el mes després del temps actual del sistema es troba en els dos mesos següents.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
