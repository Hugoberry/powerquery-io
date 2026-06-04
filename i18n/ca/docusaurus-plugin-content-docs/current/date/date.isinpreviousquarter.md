---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


Indica si aquesta data es produeix durant el trimestre anterior, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el trimestre actual.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor de data i hora `dateTime` especificat es produeix durant el trimestre anterior, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el trimestre actual.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` que s'ha d'avaluar.


## Examples

### Example #1
Determina si el trimestre previ a l'hora del sistema actual és en el trimestre anterior.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
