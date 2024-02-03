---
title: Date.Year
---

# Date.Year


## Description

Returnerer årskomponenten.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Returnerer årskomponenten for den angivne værdi af typen <code>datetime</code>, <code>dateTime</code>.


## Examples

### Example #1 
Find året i #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
