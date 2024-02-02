---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Renvoie le début de l’année.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Renvoie le début de l’année qui contient <code>dateTime</code>.    <code>dateTime</code> doit être une valeur <code>date</code>, <code>datetime</code>, ou <code>datetimezone</code>.


## Examples

### Example #1 
Recherchez le début de l’année du 10 octobre 2011, 08:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
