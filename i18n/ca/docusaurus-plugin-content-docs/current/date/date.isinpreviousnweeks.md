---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Indica si aquesta data es produeix durant les setmanes anteriors, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant aquesta setmana.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Indica si el valor de data i hora `dateTime` especificat es produeix durant les setmanes anteriors, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant aquesta setmana.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` que s'ha d'avaluar.
-   `weeks`: nombre de setmanes.


## Examples

### Example #1
Determina si la setmana abans del temps actual del sistema es troba en les dues setmanes anteriors.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
