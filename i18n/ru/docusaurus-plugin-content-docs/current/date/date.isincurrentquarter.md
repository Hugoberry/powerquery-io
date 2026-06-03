---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Указывает, приходится ли эта дата на текущий квартал, что определяется текущей датой и временем в системе.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Указывает, приходится ли заданное значение datetime `dateTime` на текущий квартал, что определяется текущей датой и временем в системе.

-   `dateTime`: значение `date`, `datetime` или `datetimezone`, которое необходимо оценить.


## Examples

### Example #1
Определить, приходится ли текущее системное время на текущий квартал.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
