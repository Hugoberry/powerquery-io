---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


## Description

Указує, чи це значення дати й часу припадає на наступну секунду відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну секунду, ця функція повертає відповідь False.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на наступну секунду відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну секунду, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


## Examples

### Example #1 
Визначити, чи секунда після поточного системного часу припадає на наступну секунду.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
