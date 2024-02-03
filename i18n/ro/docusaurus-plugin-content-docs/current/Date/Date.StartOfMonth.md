---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

Returnează începutul lunii.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

Returnează începutul lunii care conține <code>dateTime</code>.    <code>dateTime</code> trebuie să fie o valoare <code>date</code> sau <code>datetime</code>.


## Examples

### Example #1 
Găsiți începutul lunii pentru 10 octombrie 2011, 8:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
