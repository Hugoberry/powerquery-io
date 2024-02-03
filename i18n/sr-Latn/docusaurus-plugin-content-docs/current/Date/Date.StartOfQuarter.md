---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Vraća početak kvartala.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Vraća početak kvartala koji sadrži <code>dateTime</code>.      <code>dateTime</code> mora da bude vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code>.


## Examples

### Example #1 
Pronađite početak kvartala za 10. oktobar 2011. u 08:00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
