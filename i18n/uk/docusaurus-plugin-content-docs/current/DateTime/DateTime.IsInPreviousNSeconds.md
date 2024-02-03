---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


## Description

Указує, чи це значення дати й часу припадає на зазначений у секундах попередній інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну секунду, ця функція повертає відповідь False.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на зазначений у секундах попередній інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну секунду, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      <li><code>seconds</code>: кількість секунд.</li>      </ul>


## Examples

### Example #1 
Визначити, чи секунда до поточного системного часу припадає на попередні дві секунди.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
