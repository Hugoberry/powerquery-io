---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Указывает, приходится ли эта дата на текущий день, что определяется текущей датой и временем в системе.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Указывает, приходится заданное значение datetime `dateTime` на текущий день, что определяется текущей датой и временем в системе.

-   `dateTime`: значение `date`, `datetime` или `datetimezone`, которое необходимо оценить.


## Examples

### Example #1
Определить, приходится ли текущее системное время на текущий день.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
