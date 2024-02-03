---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

Retorna l&#39;inici del mes.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

Retorna l'inici del mes que conté el dia <code>dateTime</code>.    <code>dateTime</code> ha de ser un valor <code>date</code> o <code>datetime</code>.


## Examples

### Example #1 
Cerca l&#39;inici del mes per al 10 d&#39;octubre de 2011, 8:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
