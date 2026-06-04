---
title: Date.StartOfDay
---

# Date.StartOfDay


Vrátí začátek dne.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Vrátí začátek dne, který představuje `dateTime`. `dateTime` musí být hodnota `date`, `datetime` nebo `datetimezone`.


## Examples

### Example #1
Najděte začátek dne pro 10. října 2011, 8:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
