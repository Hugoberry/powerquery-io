---
title: Date.IsInNextYear
---

# Date.IsInNextYear


## Description

Indica si aquesta data es produeix durant l&#39;any següent, en funció de la data i l&#39;hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant l&#39;any actual.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Details

Indica si el valor de data i hora <code>dateTime</code> especificat es produeix durant l'any següent, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant l'any actual.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que s'ha d'avaluar.</li>      </ul>


## Examples

### Example #1 
Determina si l&#39;any posterior a l&#39;hora del sistema actual és en l&#39;any següent.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
