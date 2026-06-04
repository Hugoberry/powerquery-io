---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Указує, чи це значення дати й часу зустрічається протягом поточної секунди відповідно до поточних дати й часу в системі.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` зустрічається протягом поточної секунди відповідно до поточних дати й часу в системі.

-   `dateTime`: значення `datetime` або `datetimezone`, яке потрібно оцінити.


## Examples

### Example #1
Визначити, чи поточний час системи припадає на поточну секунду.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
