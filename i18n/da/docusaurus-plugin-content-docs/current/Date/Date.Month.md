---
title: Date.Month
---

# Date.Month


## Description

Returnerer månedskomponenten.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Returnerer månedskomponenten for den angivne værdi af typen <code>datetime</code>, <code>dateTime</code>.


## Examples

### Example #1 
Find måneden i #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
