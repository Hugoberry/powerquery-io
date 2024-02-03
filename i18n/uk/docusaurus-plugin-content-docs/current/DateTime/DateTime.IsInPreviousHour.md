---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


## Description

Указує, чи це значення дати й часу припадає на попередню годину відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну годину, ця функція повертає відповідь False.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на попередню годину відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну годину, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


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
