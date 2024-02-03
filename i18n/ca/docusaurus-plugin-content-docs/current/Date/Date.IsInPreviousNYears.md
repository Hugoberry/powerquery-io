---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


## Description

Indica si aquesta data es produeix durant els anys anteriors, en funció de la data i l&#39;hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant l&#39;any actual.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Indica si el valor de data i hora <code>dateTime</code> especificat es produeix durant els anys anteriors, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant l'any actual.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que s'ha d'avaluar.</li>      <li><code>years</code>: nombre d'anys.</li>      </ul>


## Examples

### Example #1 
Determina si l&#39;any abans del temps actual del sistema es troba en els dos anys anteriors.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
