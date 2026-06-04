---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Указує, чи це значення дати й часу припадає на попередню годину відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну годину, ця функція повертає відповідь False.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` припадає на попередню годину відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну годину, ця функція повертає відповідь False.

-   `dateTime`: значення `datetime` або `datetimezone`, яке потрібно оцінити.


## Examples

### Example #1
Визначити, чи година до поточного системного часу припадає на попередню годину.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
