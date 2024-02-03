---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


## Description

Указує, чи ця дата припадає на наступний квартал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний квартал, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на наступний квартал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний квартал, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


## Examples

### Example #1 
Визначити, чи квартал після поточного часу системи відноситься до наступного кварталу.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
