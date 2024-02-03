---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


## Description

Indica si aquesta data es produeix durant el mes anterior, en funció de la data i l&#39;hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el mes actual.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Details

Indica si el valor de data i hora <code>dateTime</code> especificat es produeix durant el mes anterior, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el mes actual.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que s'ha d'avaluar.</li>      </ul>


## Examples

### Example #1 
Determina si el mes previ a l&#39;hora del sistema actual és en el mes anterior.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date