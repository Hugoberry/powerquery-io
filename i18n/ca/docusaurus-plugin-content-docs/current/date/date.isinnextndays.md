---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


Indica si aquesta data es produeix durant els dies següents, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el dia d'avui.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Indica si el valor de data i hora `dateTime` especificat es produeix durant els dies següents, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el dia d'avui.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` que s'ha d'avaluar.
-   `days`: nombre de dies.


## Examples

### Example #1
Determina si el dia després del temps actual del sistema es troba en els dos dies següents.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
