---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


## Description

Указує, чи це значення дати й часу припадає на попередню секунду відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну секунду, ця функція повертає відповідь False.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на попередню секунду відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну секунду, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


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
