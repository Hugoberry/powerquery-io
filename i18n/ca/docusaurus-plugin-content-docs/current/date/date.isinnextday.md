---
title: Date.IsInNextDay
---

# Date.IsInNextDay


Indica si aquesta data es produeix durant el dia següent, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el dia d'avui.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor de data i hora `dateTime` especificat es produeix durant el dia següent, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el dia d'avui.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` que s'ha d'avaluar.


## Examples

### Example #1
Determina si el dia posterior a l'hora del sistema actual és en el dia següent.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
