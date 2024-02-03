---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

Vrátí začátek měsíce.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

Vrátí začátek měsíce, který obsahuje <code>dateTime</code>.    <code>dateTime</code> musí být hodnota <code>date</code> nebo <code>datetime</code>.


## Examples

### Example #1 
Najděte začátek měsíce pro 10. října 2011, 8:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
