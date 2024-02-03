---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


## Description

Indica si aquesta data es produeix durant el trimestre anterior, en funció de la data i l&#39;hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el trimestre actual.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Details

Indica si el valor de data i hora <code>dateTime</code> especificat es produeix durant el trimestre anterior, en funció de la data i l'hora actuals del sistema. Tingueu en compte que aquesta funció retornarà false si passa un valor que es produeix durant el trimestre actual.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que s'ha d'avaluar.</li>      </ul>


## Examples

### Example #1 
Determina si el trimestre previ a l&#39;hora del sistema actual és en el trimestre anterior.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date