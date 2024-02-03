---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

Указує, чи ця дата припадає на зазначений у роках наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний рік, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на зазначений у роках наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний рік, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      <li><code>years</code>: кількість років.</li>      </ul>


## Examples

### Example #1 
Визначити, чи рік після поточного часу в системі відноситься до наступних двох років.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
