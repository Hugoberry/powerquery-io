---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Указує, чи це значення дати й часу припадає на попередню секунду відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну секунду, ця функція повертає відповідь False.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` припадає на попередню секунду відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну секунду, ця функція повертає відповідь False.

-   `dateTime`: значення `datetime` або `datetimezone`, яке потрібно оцінити.


## Examples

### Example #1
Визначити, чи секунда перед поточним системним часом припадає на попередню секунду.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
