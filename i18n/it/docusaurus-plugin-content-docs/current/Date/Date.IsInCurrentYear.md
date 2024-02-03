---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


## Description

Indica se la data rientra nell&#39;anno corrente, come determinato dalla data e dall&#39;ora correnti del sistema.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Details

Indica se il valore datetime specificato <code>dateTime</code> rientra nell'anno corrente, come determinato dalla data e dall'ora correnti del sistema.      <ul>      <li><code>dateTime</code>: valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> da valutare.</li>      </ul>


## Examples

### Example #1 
Determina se l&#39;ora di sistema corrente rientra nell&#39;anno corrente.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
