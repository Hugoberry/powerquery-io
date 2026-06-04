---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


Indica si aquesta data es produeix durant el proper segon, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el segon actual.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor de data i hora `dateTime` especificat es produeix durant el proper segon, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant aquest segon.

-   `dateTime`: valor `datetime` o `datetimezone` que s'ha d'avaluar.


## Examples

### Example #1
Determina si el valor de segons posterior a l'hora del sistema actual es troba al segon següent.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
