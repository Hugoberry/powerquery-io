---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

Указує, чи ця дата зустрічається протягом поточного кварталу, як визначено поточними датою й часом у системі.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> зустрічається протягом поточного кварталу, як визначено поточними датою й часом у системі.      <ul>      <li><code>dateTime</code>: Значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


## Examples

### Example #1 
Визначити, чи поточний час системи відноситься до поточного кварталу.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
