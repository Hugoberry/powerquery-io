---
title: Time.EndOfHour
---

# Time.EndOfHour


Vráti koniec hodiny.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Vráti koniec hodiny, ktorý predstavuje hodnota `dateTime` vrátane zlomkových sekúnd. Informácie o časovom pásme sa zachovajú.

-   `dateTime`: Hodnota `time`, `datetime` alebo `datetimezone`, z ktorej sa vypočíta koniec hodiny.


## Examples

### Example #1
Získajte koniec hodiny pre dátum 14. 5. 2011 a čas 17:00:00.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
Získajte koniec hodiny pre dátum 17. 5. 2011 a čas 17:00:00 – 7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
