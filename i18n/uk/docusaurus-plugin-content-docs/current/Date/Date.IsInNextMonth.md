---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


## Description

Указує, чи ця дата припадає на наступний місяць відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний місяць, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на наступний місяць відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний місяць, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


## Examples

### Example #1 
Визначити, чи місяць після поточного часу системи відноситься до наступного місяця.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
