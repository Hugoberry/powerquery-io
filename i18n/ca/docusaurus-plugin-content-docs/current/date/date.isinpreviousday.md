---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


Indica si aquesta data es produeix durant el dia anterior, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el dia d'avui.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor de data i hora `dateTime` especificat es produeix durant el dia anterior, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el dia d'avui.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` que s'ha d'avaluar.


## Examples

### Example #1
Determina si el dia previ a l'hora del sistema actual és en el dia anterior.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
