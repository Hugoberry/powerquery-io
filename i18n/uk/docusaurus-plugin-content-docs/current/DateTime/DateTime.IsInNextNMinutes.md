---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


## Description

Указує, чи це значення дати й часу припадає на зазначений у хвилинах наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну хвилину, ця функція повертає відповідь False.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на зазначений у хвилинах наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну хвилину, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      <li><code>minutes</code>: кількість хвилин.</li>      </ul>


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
