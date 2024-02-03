---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Indica si aquesta data té lloc durant el mes actual, determinat per la data i hora actuals del sistema.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Indica si el valor datetime <code>dateTime</code> donat té lloc durant el mes actual, determinat per la data i hora actuals del sistema.      <ul>      <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que s'ha d'avaluar.</li>      </ul>


## Examples

### Example #1 
Determina si l&#39;hora del sistema actual és en el mes actual.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
