---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Returnează începutul anului.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Returnează începutul anului care conține <code>dateTime</code>.    <code>dateTime</code> trebuie să fie o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code>.


## Examples

### Example #1 
Găsiți începutul anului pentru 10 octombrie 2011, 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
