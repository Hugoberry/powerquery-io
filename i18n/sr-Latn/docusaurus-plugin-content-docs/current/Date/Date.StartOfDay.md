---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Vraća početak dana.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

Vraća početak dana koji predstavlja <code>dateTime</code>.    <code>dateTime</code> mora da bude vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code>.


## Examples

### Example #1 
Pronađite početak dana za 10. oktobar 2011. u 08:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
