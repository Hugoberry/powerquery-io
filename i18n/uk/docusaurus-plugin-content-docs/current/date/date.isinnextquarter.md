---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


Указує, чи ця дата припадає на наступний квартал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний квартал, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` припадає на наступний квартал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний квартал, ця функція повертає відповідь False.

-   `dateTime`: значення `date`, `datetime` або `datetimezone`, яке потрібно оцінити.


## Examples

### Example #1
Визначити, чи квартал після поточного часу системи відноситься до наступного кварталу.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
