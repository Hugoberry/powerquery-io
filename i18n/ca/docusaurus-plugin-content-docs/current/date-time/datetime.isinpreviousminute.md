---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


Indica si aquesta data es produeix durant el minut anterior, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el minut actual.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor de data i hora `dateTime` especificat es produeix durant el minut anterior, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el minut actual.

-   `dateTime`: valor `datetime` o `datetimezone` que s'ha d'avaluar.


## Examples

### Example #1
Determina si el valor de minuts anterior a l'hora del sistema actual es troba al minut anterior.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
