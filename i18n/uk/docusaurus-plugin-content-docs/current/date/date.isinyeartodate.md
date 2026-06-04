---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Указує, чи ця дата зустрічається протягом поточного року і чи вона відноситься до поточного дня чи раніше, як визначено поточними датою й часом у системі.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` зустрічається протягом поточного року і чи воно відноситься до поточного дня чи раніше, як визначено поточними датою й часом у системі.

-   `dateTime`: Значення `date`, `datetime` або `datetimezone`, яке потрібно оцінити.


## Examples

### Example #1
Визначити, чи поточний час системи відноситься до періоду з початку року.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
