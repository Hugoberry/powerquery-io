---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


Indica si aquesta data es produeix durant l'hora següent, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant l'hora actual.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor de data i hora `dateTime` especificat es produeix durant l'hora següent, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant l'hora actual.

-   `dateTime`: valor `datetime` o `datetimezone` que s'ha d'avaluar.


## Examples

### Example #1
Determina si el valor d'hores posterior a l'hora del sistema actual es troba a l'hora següent.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
