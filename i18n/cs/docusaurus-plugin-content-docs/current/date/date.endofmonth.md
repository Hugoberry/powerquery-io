---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Vrátí konec měsíce.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

Vrátí konec měsíce, který obsahuje `dateTime`.

-   `dateTime`: Hodnota `date`, `datetime`, nebo `datetimezone`, ze které se počítá konec měsíce.


## Examples

### Example #1
Získat konec měsíce pro 14. 5. 2011
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2
Získat konec měsíce pro 14. 5. 2011, 17:00:00 -7:00
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
