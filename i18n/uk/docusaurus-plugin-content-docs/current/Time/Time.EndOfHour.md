---
title: Time.EndOfHour
---

# Time.EndOfHour


## Description

Повертає дані про кінець години.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Details

Повертає дані про кінець години, указані за допомогою <code>dateTime</code>, включно з частками секунди. Відомості часового поясу зберігаються.      <ul>        <li><code>dateTime</code> – значення типу <code>time</code>, <code>datetime</code> або <code>datetimezone</code>, на основі якого обчислюється кінець години.</li>      </ul>


## Examples

### Example #1 
Отримати кінець години для 14 травня 2011 р. 17:00:00.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Отримати кінець години для 17 травня 2011 р. 17:00:00 -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
