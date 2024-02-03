---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


## Description

Указує, чи ця дата припадає на попередній тиждень відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний тиждень, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на попередній тиждень відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний тиждень, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


## Examples

### Example #1 
Визначити, чи тиждень до поточного часу системи відноситься до попереднього тижня.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
