---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Vraća početak godine.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Vraća početak godine koji sadrži <code>dateTime</code>.    <code>dateTime</code> mora da bude vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code>.


## Examples

### Example #1 
Pronađite početak godine za 10. oktobar 2011. u 08:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
