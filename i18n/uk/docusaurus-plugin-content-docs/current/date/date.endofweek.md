---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Повертає дані про кінець тижня.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Повертає кінець тижня, який містить `dateTime`. Ця функція приймає необов’язковий параметр `Day`, `firstDayOfWeek`, щоб встановити перший день тижня для цього відносного обчислення. Стандартне значення – `Day.Sunday`.

-   `dateTime`: значення типу `date`, `datetime` або `datetimezone`, з якого обчислюється останній день тижня.
-   `firstDayOfWeek`: *(необов’язково)* значення типу `Day.Type`, що представляє перший день тижня. Можливі значення: `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday`, `Day.Saturday`. Стандартне значення – `Day.Sunday`.


## Examples

### Example #1
Отримання кінця тижня для 14.05.11.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Отримання кінця тижня для 17.05.11, 17:00:00 -7:00 за умови, що першим днем тижня є неділя.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
