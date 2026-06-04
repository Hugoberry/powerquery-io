---
title: Date.EndOfYear
---

# Date.EndOfYear


Повертає дані про кінець року.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Remarks

Повертає дані про кінець року, які містить `dateTime`, включно з частками секунди. Відомості часового поясу зберігаються.

-   `dateTime` – значення типу `date`, `datetime` або `datetimezone`, на основі якого обчислюється кінець року.


## Examples

### Example #1
Отримати кінець року для 14 травня 2011 р. 17:00:00.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2
Отримати кінець години для 17 травня 2011 р. 17:00:00 -7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
