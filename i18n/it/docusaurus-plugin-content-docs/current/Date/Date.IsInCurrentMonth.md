---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Indica se la data rientra nel mese corrente, come determinato dalla data e dall&#39;ora correnti del sistema.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Indica se il valore datetime specificato <code>dateTime</code> rientra nel mese corrente, come determinato dalla data e dall'ora correnti del sistema.      <ul>      <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> da valutare.</li>      </ul>


## Examples

### Example #1 
Determina se l&#39;ora di sistema corrente rientra nel mese corrente.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
