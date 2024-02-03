---
title: Date.Year
---

# Date.Year


## Description

Returnează componenta year.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Returnează componenta year a valorii <code>datetime</code> furnizate, <code>dateTime</code>.


## Examples

### Example #1 
Găsiţi anul din #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
