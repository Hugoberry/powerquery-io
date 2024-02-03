---
title: Date.Year
---

# Date.Year


## Description

Vrátí komponentu roku.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Vrátí komponentu roku předané hodnoty <code>datetime</code> <code>dateTime</code>.


## Examples

### Example #1 
Vyhledá rok v hodnotě #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
