---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Atgriež gada sākumu.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Atgriež gada sākumu, kas satur <code>dateTime</code>.    <code>dateTime</code> jābūt vērtībai <code>date</code>, <code>datetime</code> vai <code>datetimezone</code>.


## Examples

### Example #1 
Atrodiet gada sākumu 2011. gada 10. oktobrim, plkst. 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
