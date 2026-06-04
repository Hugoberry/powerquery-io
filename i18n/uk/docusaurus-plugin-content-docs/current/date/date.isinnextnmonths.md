---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Указує, чи ця дата припадає на зазначений у місяцях наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний місяць, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` припадає на зазначений у місяцях наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний місяць, ця функція повертає відповідь False.

-   `dateTime`: значення `date`, `datetime` або `datetimezone`, яке потрібно оцінити.
-   `months`: кількість місяців.


## Examples

### Example #1
Визначити, чи місяць після поточного часу в системі відноситься до наступних двох місяців.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
