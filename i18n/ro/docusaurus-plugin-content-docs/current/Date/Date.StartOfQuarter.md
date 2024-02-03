---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Returnează începutul trimestrului.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Returnează începutul trimestrului care conține <code>dateTime</code>.    <code>dateTime</code> trebuie să fie o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code>.


## Examples

### Example #1 
Găsiți începutul trimestrului pentru 10 octombrie 2011, 8:00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
