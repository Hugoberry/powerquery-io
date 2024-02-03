---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Retorna l&#39;inici del trimestre.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Retorna l'inici del trimestre que conté el dia <code>dateTime</code>.    <code>dateTime</code> ha de ser un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.


## Examples

### Example #1 
Cerca l&#39;inici del trimestre per al 10 d&#39;octubre de 2011, 8:00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
