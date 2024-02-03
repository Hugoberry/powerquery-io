---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Indica si aquest datetime es produeix durant l&#39;hora actual, segons ho determinen la data i hora actuals al sistema.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Indica si el valor datetime especificat <code>dateTime</code> es produeix durant l'hora actual, segons ho determinen la data i hora actuals al sistema.      <ul>      <li><code>dateTime</code>: un valor <code>datetime</code> o <code>datetimezone</code> que s'ha d'avaluar.</li>      </ul>


## Examples

### Example #1 
Determina si l&#39;hora del sistema actual es troba a l&#39;hora actual.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
