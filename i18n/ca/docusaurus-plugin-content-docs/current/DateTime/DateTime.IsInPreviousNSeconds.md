---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


## Description

Indica si aquesta data es produeix durant els segons anteriors, en funció de la data i l&#39;hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el segon actual.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Indica si el valor de data i hora <code>dateTime</code> especificat es produeix durant els segons anteriors, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant aquest segon.      <ul>      <li><code>dateTime</code>: valor <code>datetime</code> o <code>datetimezone</code> que s'ha d'avaluar.</li>      <li><code>seconds</code>: nombre de segons.</li>      </ul>


## Examples

### Example #1 
Determina si el valor de segons anterior a l&#39;hora del sistema actual es troba als dos segons anteriors.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
