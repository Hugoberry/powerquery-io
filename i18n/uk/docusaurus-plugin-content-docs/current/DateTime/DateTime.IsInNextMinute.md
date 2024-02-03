---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


## Description

Указує, чи це значення дати й часу припадає на наступну хвилину відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну хвилину, ця функція повертає відповідь False.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на наступну хвилину відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну хвилину, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


## Examples

### Example #1 
Визначити, чи хвилина після поточного системного часу припадає на наступну хвилину.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
