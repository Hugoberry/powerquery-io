---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Указує, чи ця дата припадає на зазначений у тижнях попередній період відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний тиждень, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` припадає на зазначений у тижнях попередній період відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний тиждень, ця функція повертає відповідь False.

-   `dateTime`: значення `date`, `datetime` або `datetimezone`, яке потрібно оцінити.
-   `weeks`: кількість тижнів.


## Examples

### Example #1
Визначити, чи тиждень перед поточним часом у системі відноситься до попередніх двох тижнів.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
