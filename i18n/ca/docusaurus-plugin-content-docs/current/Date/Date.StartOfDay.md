---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Retorna l&#39;inici del dia.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

Retorna l'inici del dia representat per <code>dateTime</code>.    <code>dateTime</code> ha de ser un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.


## Examples

### Example #1 
Cerca l&#39;inici del dia per al 10 d&#39;octubre de 2011, 8:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
