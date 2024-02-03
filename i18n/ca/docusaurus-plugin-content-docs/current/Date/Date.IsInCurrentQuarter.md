---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

Indica si aquesta data té lloc durant el trimestre actual, determinat per la data i hora actuals del sistema.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

Indica si el valor datetime <code>dateTime</code> donat té lloc durant el trimestre actual, determinat per la data i hora actuals del sistema.      <ul>      <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que s'ha d'avaluar.</li>      </ul>


## Examples

### Example #1 
Determina si l&#39;hora del sistema actual és en el trimestre actual.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
