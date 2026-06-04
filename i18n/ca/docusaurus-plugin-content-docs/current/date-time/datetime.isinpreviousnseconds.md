---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


Indica si aquesta data es produeix durant els segons anteriors, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el segon actual.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Indica si el valor de data i hora `dateTime` especificat es produeix durant els segons anteriors, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant aquest segon.

-   `dateTime`: valor `datetime` o `datetimezone` que s'ha d'avaluar.
-   `seconds`: nombre de segons.


## Examples

### Example #1
Determina si el valor de segons anterior a l'hora del sistema actual es troba als dos segons anteriors.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
