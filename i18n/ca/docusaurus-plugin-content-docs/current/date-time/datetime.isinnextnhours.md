---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


Indica si aquesta data es produeix durant les hores següents, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant l'hora actual.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Indica si el valor de data i hora `dateTime` especificat es produeix durant les hores següents, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant l'hora actual.

-   `dateTime`: valor `datetime` o `datetimezone` que s'ha d'avaluar.
-   `hours`: nombre d'hores.


## Examples

### Example #1
Determina si el valor d'hores posterior a l'hora del sistema actual es troba a les dues hores següents.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
