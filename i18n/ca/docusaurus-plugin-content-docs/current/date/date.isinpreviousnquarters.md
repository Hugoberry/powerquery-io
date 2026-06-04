---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Indica si aquesta data es produeix durant els trimestres anteriors, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el trimestre actual.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Indica si el valor de data i hora `dateTime` especificat es produeix durant els trimestres anteriors, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el trimestre actual.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` que s'ha d'avaluar.
-   `quarters`: nombre de trimestres.


## Examples

### Example #1
Determina si el trimestre abans del temps actual del sistema es troba en els dos trimestres anteriors.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
