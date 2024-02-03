---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


## Description

Указує, чи ця дата припадає на зазначений у роках попередній період відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний рік, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на зазначений у роках попередній період відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний рік, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      <li><code>years</code>: кількість років.</li>      </ul>


## Examples

### Example #1 
Визначити, чи рік перед поточним часом у системі відноситься до попередніх двох років.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
