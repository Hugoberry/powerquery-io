---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Zwraca początek roku.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Zwraca początek roku, który zawiera <code>dateTime</code>.    <code>dateTime</code> musi być wartością typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>.


## Examples

### Example #1 
Znajdź początek roku dla daty 10 października 2011 r. 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
