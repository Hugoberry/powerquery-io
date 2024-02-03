---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


## Description

Indica si aquesta data es produeix durant els dies anteriors, en funció de la data i l&#39;hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el dia d&#39;avui.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Indica si el valor de data i hora <code>dateTime</code> especificat es produeix durant els dies anteriors, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el dia d'avui.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que s'ha d'avaluar.</li>      <li><code>days</code>: nombre de dies.</li>      </ul>


## Examples

### Example #1 
Determina si el dia abans del temps actual del sistema es troba en els dos dies anteriors.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
