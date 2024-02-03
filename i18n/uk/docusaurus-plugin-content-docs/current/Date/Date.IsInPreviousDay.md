---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


## Description

Указує, чи ця дата припадає на попередній день відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний день, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на попередній день відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний день, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


## Examples

### Example #1 
Визначити, чи день до поточного часу системи відноситься до попереднього дня.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
