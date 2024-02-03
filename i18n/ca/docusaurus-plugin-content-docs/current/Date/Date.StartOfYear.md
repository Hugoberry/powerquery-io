---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Retorna l&#39;inici de l&#39;any.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Retorna l'inici de l'any que conté el dia <code>dateTime</code>.    <code>dateTime</code> ha de ser un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code>.


## Examples

### Example #1 
Cerca l&#39;inici de l&#39;any per al 10 d&#39;octubre de 2011, 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
