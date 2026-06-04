---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Повертає дані про кінець місяця.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

Повертає дані про кінець місяця, які містить `dateTime`.

-   `dateTime`: значення типу `date`, `datetime` або `datetimezone`, на основі якого обчислюється кінець місяця.


## Examples

### Example #1
Отримання кінця місяця для 14.05.11.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2
Отримання кінця місяця для 17.05.11, 17:00:00 -7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
