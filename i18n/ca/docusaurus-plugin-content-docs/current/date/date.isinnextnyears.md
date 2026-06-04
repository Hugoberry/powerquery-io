---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Indica si aquesta data es produeix durant els anys següents, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant l'any actual.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Indica si el valor de data i hora `dateTime` especificat es produeix durant els anys següents, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant l'any actual.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` que s'ha d'avaluar.
-   `years`: nombre d'anys.


## Examples

### Example #1
Determina si l'any després del temps actual del sistema es troba en els dos anys següents.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
