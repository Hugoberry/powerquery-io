---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Указує, чи ця дата припадає на високосний рік.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` припадає на високосний рік.

-   `dateTime`: значення `date`, `datetime` або `datetimezone`, яке потрібно оцінити.


## Examples

### Example #1
Визначити, чи 2012 рік, представлений `#date(2012, 01, 01)`, є високосним.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
