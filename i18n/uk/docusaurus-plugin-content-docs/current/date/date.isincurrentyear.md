---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Указує, чи ця дата зустрічається протягом поточного року, як визначено поточними датою й часом у системі.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` зустрічається протягом поточного року, як визначено поточними датою й часом у системі.

-   `dateTime`: Значення `date`, `datetime` або `datetimezone`, яке потрібно оцінити.


## Examples

### Example #1
Визначити, чи поточний час системи відноситься до поточного року.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
