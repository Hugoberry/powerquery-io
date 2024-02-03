---
title: Date.Year
---

# Date.Year


## Description

Zwraca składnik roku.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Zwraca składnik roku z wartości typu <code>datetime</code> dostarczonej w parametrze <code>dateTime</code>.


## Examples

### Example #1 
Znajdź rok w wartości #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
