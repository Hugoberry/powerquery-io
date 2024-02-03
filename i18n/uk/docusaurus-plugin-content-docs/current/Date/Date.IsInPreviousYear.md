---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


## Description

Указує, чи ця дата припадає на попередній рік відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний рік, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на попередній рік відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний рік, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


## Examples

### Example #1 
Визначити, чи рік до поточного часу системи відноситься до попереднього року.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
