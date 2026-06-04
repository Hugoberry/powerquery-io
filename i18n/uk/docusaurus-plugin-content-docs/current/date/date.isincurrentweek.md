---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Указує, чи ця дата зустрічається протягом поточного тижня, як визначено поточними датою й часом у системі.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` зустрічається протягом поточного тижня, як визначено поточними датою й часом у системі.

-   `dateTime`: Значення `date`, `datetime` або `datetimezone`, яке потрібно оцінити.


## Examples

### Example #1
Визначити, чи поточний час системи відноситься до поточного тижня.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
