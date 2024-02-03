---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

Zwraca początek miesiąca.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

Zwraca początek miesiąca, który zawiera <code>dateTime</code>.    <code>dateTime</code> musi być wartością <code>daty</code> lub <code>datetime</code>.


## Examples

### Example #1 
Znajdź początek miesiąca dla daty 10 października 2011 r. 8:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
