---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Vráti koniec mesiaca.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

Vráti koniec mesiaca, ktorý obsahuje hodnotu `dateTime`.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, z ktorej sa vypočíta koniec mesiaca.


## Examples

### Example #1
Získajte koniec mesiaca pre dátum 14. 5. 2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2
Získajte koniec mesiaca pre dátum 17. 5. 2011 a čas 17:00:00 – 7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
