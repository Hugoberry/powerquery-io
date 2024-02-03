---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Указує, чи це значення дати й часу зустрічається протягом поточної години відповідно до поточних дати й часу в системі.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> зустрічається протягом поточної години відповідно до поточних дати й часу в системі.       <ul>      <li><code>dateTime</code>: значення <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


## Examples

### Example #1 
Визначити, чи поточний час системи припадає на поточну годину.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
