---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Indica si aquesta data es produeix durant els minuts següents, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el minut actual.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Indica si el valor de data i hora `dateTime` especificat es produeix durant els minuts següents, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el minut actual.

-   `dateTime`: valor `datetime` o `datetimezone` que s'ha d'avaluar.
-   `minutes`: nombre de minuts.


## Examples

### Example #1
Determina si el valor de minuts posterior a l'hora del sistema actual es troba als dos minuts següents.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
