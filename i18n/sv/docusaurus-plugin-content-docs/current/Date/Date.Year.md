---
title: Date.Year
---

# Date.Year


## Description

Returnerar årskomponenten.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Returnerar årskomponenten för angivet <code>datetime</code>-värde, <code>dateTime</code>.


## Examples

### Example #1 
Hitta året i #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
