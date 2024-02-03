---
title: Date.Year
---

# Date.Year


## Description

Vraća komponentu godine.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Vraća komponentu godine navedene vrednosti <code>datetime</code>, <code>dateTime</code>.


## Examples

### Example #1 
Pronalaženje godine u #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
