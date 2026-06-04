---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


Указує, чи ця дата припадає на попередній тиждень відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний тиждень, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` припадає на попередній тиждень відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний тиждень, ця функція повертає відповідь False.

-   `dateTime`: значення `date`, `datetime` або `datetimezone`, яке потрібно оцінити.


## Examples

### Example #1
Визначити, чи тиждень до поточного часу системи відноситься до попереднього тижня.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
