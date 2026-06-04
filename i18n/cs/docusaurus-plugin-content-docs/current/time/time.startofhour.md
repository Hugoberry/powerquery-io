---
title: Time.StartOfHour
---

# Time.StartOfHour


Vrátí začátek hodiny.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Vrátí začátek hodiny, který představuje `dateTime`. `dateTime` musí být hodnota `time`, `datetime` nebo `datetimezone`.


## Examples

### Example #1
Najděte začátek hodiny pro 10. října 2011, 8:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
