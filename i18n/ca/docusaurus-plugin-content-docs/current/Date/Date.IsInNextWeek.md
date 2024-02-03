---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


## Description

Indica si aquesta data es produeix durant la setmana següent, en funció de la data i l&#39;hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant aquesta setmana.


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Details

Indica si el valor de data i hora <code>dateTime</code> especificat es produeix durant la setmana següent, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant aquesta setmana.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que s'ha d'avaluar.</li>      </ul>


## Examples

### Example #1 
Determina si la setmana posterior a l&#39;hora del sistema actual és en la setmana següent.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
