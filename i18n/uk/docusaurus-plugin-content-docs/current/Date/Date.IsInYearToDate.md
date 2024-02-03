---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Указує, чи ця дата зустрічається протягом поточного року і чи вона відноситься до поточного дня чи раніше, як визначено поточними датою й часом у системі.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> зустрічається протягом поточного року і чи воно відноситься до поточного дня чи раніше, як визначено поточними датою й часом у системі.      <ul>      <li><code>dateTime</code>: Значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


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
