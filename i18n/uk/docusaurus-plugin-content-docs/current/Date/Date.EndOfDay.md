---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

Повертає дані про кінець дня.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

Повертає дані про кінець дня, указані за допомогою <code>dateTime</code>. Відомості часового поясу зберігаються.      <ul>        <li><code>dateTime</code> – значення типу <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, на основі якого обчислюється кінець дня.</li>      </ul>


## Examples

### Example #1 
Отримати кінець дня для 14.05.11, 17:00:00.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Отримання кінця дня для 17.05.11, 17:00:00 -7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
