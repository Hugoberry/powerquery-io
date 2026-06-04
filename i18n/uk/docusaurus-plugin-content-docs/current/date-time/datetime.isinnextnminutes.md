---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Указує, чи це значення дати й часу припадає на зазначений у хвилинах наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну хвилину, ця функція повертає відповідь False.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` припадає на зазначений у хвилинах наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну хвилину, ця функція повертає відповідь False.

-   `dateTime`: значення `datetime` або `datetimezone`, яке потрібно оцінити.
-   `minutes`: кількість хвилин.


## Examples

### Example #1
Визначити, чи хвилина після поточного системного часу припадає на наступні дві хвилини.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
