---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

Указує, чи ця дата зустрічається протягом поточного тижня, як визначено поточними датою й часом у системі.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> зустрічається протягом поточного тижня, як визначено поточними датою й часом у системі.      <ul>      <li><code>dateTime</code>: Значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


## Examples

### Example #1 
Визначити, чи поточний час системи відноситься до поточного тижня.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
