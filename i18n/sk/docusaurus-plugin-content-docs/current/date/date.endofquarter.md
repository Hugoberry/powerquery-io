---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Vráti koniec štvrťroka.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Vráti koniec štvrťroka, ktorý obsahuje hodnotu `dateTime`. Informácie o časovom pásme sa zachovajú.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, z ktorej sa vypočíta koniec štvrťroka.


## Examples

### Example #1
Nájdite koniec štvrťroka pre dátum 10. október 2011 a čas 8:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
