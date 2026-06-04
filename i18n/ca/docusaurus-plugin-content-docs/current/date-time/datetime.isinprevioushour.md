---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Indica si aquesta data es produeix durant l'hora anterior, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant l'hora actual.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor de data i hora `dateTime` especificat es produeix durant l'hora anterior, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant l'hora actual.

-   `dateTime`: valor `datetime` o `datetimezone` que s'ha d'avaluar.


## Examples

### Example #1
Determina si el valor d'hores anterior a l'hora del sistema actual es troba a l'hora anterior.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
