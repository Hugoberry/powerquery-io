---
title: Date.IsInNextDay
---

# Date.IsInNextDay


## Description

Указує, чи ця дата припадає на наступний день відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний день, ця функція повертає відповідь False.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> припадає на наступний день відповідно до поточних дати та часу в системі. Зверніть увагу: якщо передане значення припадає на поточний день, ця функція повертає відповідь False.      <ul>      <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


## Examples

### Example #1 
Визначити, чи день після поточного часу системи відноситься до наступного дня.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
