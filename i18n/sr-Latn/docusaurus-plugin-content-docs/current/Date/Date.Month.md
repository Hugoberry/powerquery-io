---
title: Date.Month
---

# Date.Month


## Description

Vraća komponentu meseca.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Vraća komponentu meseca navedene vrednosti <code>datetime</code>, <code>dateTime</code>.


## Examples

### Example #1 
Pronalaženje meseca u #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
