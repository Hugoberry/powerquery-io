---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Retorna el final del trimestre.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Retorna el final del trimestre que conté el dia <code>dateTime</code>. Es conserva la informació del fus horari.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> a partir del qual es calcula el final del trimestre.</li>      </ul>


## Examples

### Example #1 
Cerca el final del trimestre per al 10 d&#39;octubre de 2011, 8:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
