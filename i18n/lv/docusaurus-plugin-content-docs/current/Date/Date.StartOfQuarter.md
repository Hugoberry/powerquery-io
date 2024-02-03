---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Atgriež ceturkšņa sākumu.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Atgriež ceturkšņa sākumu, kas satur <code>dateTime</code>.    <code>dateTime</code> jābūt vērtībai <code>date</code>, <code>datetime</code> vai <code>datetimezone</code>.


## Examples

### Example #1 
Atrodiet ceturkšņa sākumu 2011. gada 10. oktobrim, plkst. 8.00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
