---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Vrátí začátek čtvrtletí.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Vrátí začátek čtvrtletí, které obsahuje `dateTime`. `dateTime` musí být hodnota `date`, `datetime` nebo `datetimezone`.


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
