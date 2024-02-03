---
title: Date.Year
---

# Date.Year


## Description

Atgriež gada komponentu.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Atgriež sniegtās <code>datetime</code> vērtības, <code>dateTime</code>, gada komponentu.


## Examples

### Example #1 
Atrast gadu vērtībā #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
