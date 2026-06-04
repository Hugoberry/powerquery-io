---
title: Date.IsInNextDay
---

# Date.IsInNextDay


Указує, чи ця дата припадає на наступний день відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний день, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` припадає на наступний день відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний день, ця функція повертає відповідь False.

-   `dateTime`: значення `date`, `datetime` або `datetimezone`, яке потрібно оцінити.


## Examples

### Example #1
Визначити, чи день після поточного часу системи відноситься до наступного дня.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
