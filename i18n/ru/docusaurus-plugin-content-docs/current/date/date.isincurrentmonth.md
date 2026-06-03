---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Указывает, приходится ли эта дата на текущий месяц, что определяется текущей датой и временем в системе.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Указывает, приходится ли заданное значение datetime `dateTime` на текущий месяц, что определяется текущей датой и временем в системе.

-   `dateTime`: значение `date`, `datetime` или `datetimezone`, которое необходимо оценить.


## Examples

### Example #1
Определить, приходится ли текущее системное время на текущий месяц.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
