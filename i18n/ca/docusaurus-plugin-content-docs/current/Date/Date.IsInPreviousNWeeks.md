---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


## Description

Indica si aquesta data es produeix durant les setmanes anteriors, en funció de la data i l&#39;hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant aquesta setmana.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Indica si el valor de data i hora <code>dateTime</code> especificat es produeix durant les setmanes anteriors, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant aquesta setmana.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que s'ha d'avaluar.</li>      <li><code>weeks</code>: nombre de setmanes.</li>      </ul>


## Examples

### Example #1 
Determina si la setmana abans del temps actual del sistema es troba en les dues setmanes anteriors.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
