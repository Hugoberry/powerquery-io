---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


## Description

Indica si aquesta data es produeix durant els minuts següents, en funció de la data i l&#39;hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el minut actual.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Indica si el valor de data i hora <code>dateTime</code> especificat es produeix durant els minuts següents, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el minut actual.      <ul>      <li><code>dateTime</code>: valor <code>datetime</code> o <code>datetimezone</code> que s'ha d'avaluar.</li>      <li><code>minutes</code>: nombre de minuts.</li>      </ul>


## Examples

### Example #1 
Determina si el valor de minuts posterior a l&#39;hora del sistema actual es troba als dos minuts següents.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
