---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

Указує, чи це значення дати й часу припадає на зазначений у годинах наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну годину, ця функція повертає відповідь False.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на зазначений у годинах наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну годину, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      <li><code>hours</code>: кількість годин.</li>      </ul>


## Examples

### Example #1 
Визначити, чи година після поточного системного часу припадає на наступні дві години.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
