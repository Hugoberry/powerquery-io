---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


## Description

Указує, чи ця дата зустрічається протягом поточного дня, як визначено поточними датою й часом у системі.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> зустрічається протягом поточного дня, як визначено поточними датою й часом у системі.      <ul>      <li><code>dateTime</code>: Значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


## Examples

### Example #1 
Визначити, чи поточний час системи відноситься до поточного дня.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
