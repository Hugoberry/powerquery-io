---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

Указує, чи ця дата припадає на зазначений у місяцях попередній період відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний місяць, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на зазначений у місяцях попередній період відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний місяць, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      <li><code>months</code>: кількість місяців.</li>      </ul>


## Examples

### Example #1 
Визначити, чи місяць перед поточним часом у системі відноситься до попередніх двох місяців.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
