---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

Indica si aquesta data es produeix durant les hores següents, en funció de la data i l&#39;hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant l&#39;hora actual.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Indica si el valor de data i hora <code>dateTime</code> especificat es produeix durant les hores següents, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant l'hora actual.      <ul>      <li><code>dateTime</code>: valor <code>datetime</code> o <code>datetimezone</code> que s'ha d'avaluar.</li>      <li><code>hours</code>: nombre d'hores.</li>      </ul>


## Examples

### Example #1 
Determina si el valor d&#39;hores posterior a l&#39;hora del sistema actual es troba a les dues hores següents.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
