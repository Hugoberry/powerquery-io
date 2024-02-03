---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

Indica se la data rientra nella settimana corrente, come determinato dalla data e dall&#39;ora correnti del sistema.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

Indica se il valore datetime specificato <code>dateTime</code> rientra nella settimana corrente, come determinato dalla data e dall'ora correnti del sistema.      <ul>      <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> da valutare.</li>      </ul>


## Examples

### Example #1 
Determina se l&#39;ora di sistema corrente rientra nella settimana corrente.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
