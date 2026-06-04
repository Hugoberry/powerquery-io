---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Повертає дані про кінець кварталу.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Повертає дані про кінець кварталу, які містить `dateTime`. Відомості часового поясу зберігаються.

-   `dateTime` – значення типу `date`, `datetime` або `datetimezone`, на основі якого обчислюється кінець кварталу.


## Examples

### Example #1
Виявити кінець кварталу для 10 жовтня 2011 р., 08:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
