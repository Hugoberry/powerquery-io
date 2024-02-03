---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Указує, чи це значення дати й часу зустрічається протягом поточної секунди відповідно до поточних дати й часу в системі.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Указує, чи задане значення дати й часу <code>dateTime</code> зустрічається протягом поточної секунди відповідно до поточних дати й часу в системі.      <ul>      <li><code>dateTime</code>: значення <code>datetime</code> або <code>datetimezone</code>, яке потрібно оцінити.</li>      </ul>


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
