---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


Указує, чи ця дата припадає на зазначений у роках попередній період відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний рік, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` припадає на зазначений у роках попередній період відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний рік, ця функція повертає відповідь False.

-   `dateTime`: значення `date`, `datetime` або `datetimezone`, яке потрібно оцінити.
-   `years`: кількість років.


## Examples

### Example #1
Визначити, чи рік перед поточним часом у системі відноситься до попередніх двох років.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
