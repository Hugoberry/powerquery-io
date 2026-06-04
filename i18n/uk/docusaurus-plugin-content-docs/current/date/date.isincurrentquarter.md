---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Указує, чи ця дата зустрічається протягом поточного кварталу, як визначено поточними датою й часом у системі.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` зустрічається протягом поточного кварталу, як визначено поточними датою й часом у системі.

-   `dateTime`: Значення `date`, `datetime` або `datetimezone`, яке потрібно оцінити.


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
