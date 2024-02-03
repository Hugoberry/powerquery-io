---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


## Description

Указує, чи ця дата припадає на зазначений у днях попередній період відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний день, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на зазначений у днях попередній період відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний день, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      <li><code>days</code>: кількість днів.</li>      </ul>


## Examples

### Example #1 
Визначити, чи день перед поточним часом у системі відноситься до попередніх двох днів.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
