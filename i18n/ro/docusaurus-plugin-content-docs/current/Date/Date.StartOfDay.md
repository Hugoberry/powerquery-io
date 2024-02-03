---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Returnează începutul zilei.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

Returnează începutul zilei reprezentat de <code>dateTime</code>.    <code>dateTime</code> trebuie să fie o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code>.


## Examples

### Example #1 
Găsiți începutul zilei pentru 10 octombrie 2011, 8:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
