---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Указывает, приходится ли эта дата на текущую неделю, что определяется текущей датой и временем в системе.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Указывает, приходится ли заданное значение datetime `dateTime` на текущую неделю, что определяется текущей датой и временем в системе.

-   `dateTime`: значение `date`, `datetime` или `datetimezone`, которое необходимо оценить.


## Examples

### Example #1
Определить, приходится ли текущее системное время на текущую неделю.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
