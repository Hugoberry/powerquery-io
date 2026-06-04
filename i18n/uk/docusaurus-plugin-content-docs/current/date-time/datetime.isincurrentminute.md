---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Указує, чи це значення дати й часу зустрічається протягом поточної хвилини відповідно до поточних дати й часу в системі.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Указує, чи задане значення дати й часу `dateTime` зустрічається протягом поточної хвилини відповідно до поточних дати й часу в системі.

-   `dateTime`: значення `datetime` або `datetimezone`, яке потрібно оцінити.


## Examples

### Example #1
Визначити, чи поточний час системи припадає на поточну хвилину.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
