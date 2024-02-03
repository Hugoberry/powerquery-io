---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Indica se questo valore di data/ora rientra nel secondo corrente, come determinato dalla data e dall&#39;ora correnti del sistema.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Indica se il valore di data/ora specificato <code>dateTime</code> rientra nel secondo corrente, come determinato dalla data e dall'ora correnti del sistema.      <ul>      <li><code>dateTime</code>: valore <code>datetime</code>, o valore <code>datetimezone</code> da valutare.</li>      </ul>


## Examples

### Example #1 
Determinare se l&#39;ora di sistema corrente rientra nel secondo corrente.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
