---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


## Description

Указує, чи це значення дати й часу припадає на зазначений у годинах попередній інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну годину, ця функція повертає відповідь False.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на зазначений у годинах попередній інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточну годину, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      <li><code>hours</code>: кількість годин.</li>      </ul>


## Examples

### Example #1 
Визначити, чи година перед поточним системним часом припадає на попередні дві години.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
