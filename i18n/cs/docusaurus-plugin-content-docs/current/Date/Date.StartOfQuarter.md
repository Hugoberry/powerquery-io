---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Vrátí začátek čtvrtletí.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Vrátí začátek čtvrtletí, které obsahuje <code>dateTime</code>.      <code>dateTime</code> musí být hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>.


## Examples

### Example #1 
Najděte začátek čtvrtletí pro 10. října 2011, 8:00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
