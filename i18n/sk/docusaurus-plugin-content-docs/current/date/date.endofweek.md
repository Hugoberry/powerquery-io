---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Vráti koniec týždňa.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Vráti posledný deň v týždni, ktorý obsahuje hodnotu `dateTime`. Táto funkcia použije voliteľnú hodnotu `Day`, `firstDayOfWeek`, ktorá sa pre tento relatívny výpočet nastaví ako prvý deň v týždni. Predvolená hodnota je `Day.Sunday`.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, z ktorej sa vypočíta posledný deň týždňa
-   `firstDayOfWeek`: *(Voliteľné)* Hodnota `Day.Type` predstavujúca prvý deň týždňa. Možné hodnoty sú `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` a `Day.Saturday`. Predvolená hodnota je `Day.Sunday`.


## Examples

### Example #1
Získajte koniec týždňa pre dátum 14. 5. 2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Získajte koniec týždňa pre dátum 17. 5. 2011 a čas 17:00:00 – 7:00, pričom nedeľa je prvým dňom v týždni.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
