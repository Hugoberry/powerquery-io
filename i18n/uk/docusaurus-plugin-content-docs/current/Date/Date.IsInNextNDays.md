---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


## Description

Указує, чи ця дата припадає на зазначений у днях наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний день, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на зазначений у днях наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний день, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      <li><code>days</code>: кількість днів.</li>      </ul>


## Examples

### Example #1 
Визначити, чи день після поточного часу в системі відноситься до наступних двох днів.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
