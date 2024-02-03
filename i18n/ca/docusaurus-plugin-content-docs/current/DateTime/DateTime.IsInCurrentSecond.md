---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Indica si aquest datetime es produeix durant el segon actual, segons ho determinen la data i hora actuals al sistema.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Indica si el valor datetime especificat <code>dateTime</code> es produeix durant el segon actual, segons ho determinen la data i hora actuals al sistema.      <ul>      <li><code>dateTime</code>: un valor <code>datetime</code> o <code>datetimezone</code> que s'ha d'avaluar.</li>      </ul>


## Examples

### Example #1 
Determina si l&#39;hora del sistema actual es troba al segon actual.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
