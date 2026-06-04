---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Указує, чи ця дата зустрічається протягом поточного дня, як визначено поточними датою й часом у системі.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` зустрічається протягом поточного дня, як визначено поточними датою й часом у системі.

-   `dateTime`: Значення `date`, `datetime` або `datetimezone`, яке потрібно оцінити.


## Examples

### Example #1
Визначити, чи поточний час системи відноситься до поточного дня.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
