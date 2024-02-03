---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


## Description

Указує, чи ця дата припадає на попередній квартал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний квартал, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на попередній квартал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний квартал, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


## Examples

### Example #1 
Визначити, чи квартал до поточного часу системи відноситься до попереднього кварталу.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
