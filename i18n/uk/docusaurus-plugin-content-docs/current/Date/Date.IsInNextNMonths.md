---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


## Description

Указує, чи ця дата припадає на зазначений у місяцях наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний місяць, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на зазначений у місяцях наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний місяць, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      <li><code>months</code>: кількість місяців.</li>      </ul>


## Examples

### Example #1 
Визначити, чи місяць після поточного часу в системі відноситься до наступних двох місяців.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
