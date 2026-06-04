---
title: Date.EndOfDay
---

# Date.EndOfDay


Vrátí konec dne.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

Vrátí konec dne, který představuje `dateTime`. Informace o časovém pásmu se zachovají.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone`, ze které se počítá konec dne.


## Examples

### Example #1
Získat konec dne pro 14. 5. 2011, 17:00:00
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2
Získat konec dne pro 17. 5. 2011, 17:00:00 -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
