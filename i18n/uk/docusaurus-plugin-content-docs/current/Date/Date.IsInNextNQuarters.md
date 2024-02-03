---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


## Description

Указує, чи ця дата припадає на зазначений у кварталах наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний квартал, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на зазначений у кварталах наступний інтервал відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний квартал, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      <li><code>quarters</code>: кількість кварталів.</li>      </ul>


## Examples

### Example #1 
Визначити, чи квартал після поточного часу в системі відноситься до наступних двох кварталів.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
