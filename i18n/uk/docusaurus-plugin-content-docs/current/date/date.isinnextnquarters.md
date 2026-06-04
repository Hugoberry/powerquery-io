---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Указує, чи ця дата припадає на зазначений у кварталах наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний квартал, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` припадає на зазначений у кварталах наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний квартал, ця функція повертає відповідь False.

-   `dateTime`: значення `date`, `datetime` або `datetimezone`, яке потрібно оцінити.
-   `quarters`: кількість кварталів.


## Examples

### Example #1
Визначити, чи квартал після поточного часу в системі відноситься до наступних двох кварталів.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
