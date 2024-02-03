---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


## Description

Указує, чи ця дата припадає на зазначений у тижнях попередній період відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний тиждень, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на зазначений у тижнях попередній період відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний тиждень, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      <li><code>weeks</code>: кількість тижнів.</li>      </ul>


## Examples

### Example #1 
Визначити, чи тиждень перед поточним часом у системі відноситься до попередніх двох тижнів.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
