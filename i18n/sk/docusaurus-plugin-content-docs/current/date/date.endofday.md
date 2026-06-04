---
title: Date.EndOfDay
---

# Date.EndOfDay


Vráti koniec dňa.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

Vráti koniec dňa, ktorý predstavuje hodnota `dateTime`. Informácie o časovom pásme sa zachovajú.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, z ktorej sa vypočíta koniec dňa


## Examples

### Example #1
Získajte koniec dňa pre dátum 14. 5. 2011 a čas 17:00:00.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2
Získajte koniec dňa pre dátum 17. 5. 2011 a čas 17:00:00 – 7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
