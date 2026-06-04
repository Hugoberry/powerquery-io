---
title: Date.StartOfWeek
---

# Date.StartOfWeek


Vrátí začátek týdne.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Vrátí začátek týdne, který obsahuje `dateTime`. `dateTime` musí být hodnota `date`, `datetime` nebo `datetimezone`.


## Examples

### Example #1
Najděte začátek týdne na úterý 11. října 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2
Najděte začátek týdne pro úterý 11. října 2011 a jako začátek týdne použijte pondělí.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
