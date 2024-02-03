---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


## Description

Указує, чи ця дата припадає на попередній місяць відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний місяць, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на попередній місяць відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний місяць, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


## Examples

### Example #1 
Визначити, чи місяць до поточного часу системи відноситься до попереднього місяця.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
