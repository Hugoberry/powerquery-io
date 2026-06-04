---
title: Date.StartOfYear
---

# Date.StartOfYear


Vrátí začátek roku.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Vrátí začátek roku, který obsahuje `dateTime`. `dateTime` musí být hodnota `date`, `datetime` nebo `datetimezone`.


## Examples

### Example #1
Najděte začátek roku pro 10. října 2011, 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
