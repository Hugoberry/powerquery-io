---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Indica si aquesta data es produeix durant els trimestres següents, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el trimestre actual.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Indica si el valor de data i hora `dateTime` especificat es produeix durant els trimestres següents, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el trimestre actual.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` que s'ha d'avaluar.
-   `quarters`: nombre de trimestres.


## Examples

### Example #1
Determina si el trimestre després del temps actual del sistema es troba en els dos trimestres següents.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
