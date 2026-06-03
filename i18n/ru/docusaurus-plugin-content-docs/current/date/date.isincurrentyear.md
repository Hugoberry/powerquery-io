---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Указывает, приходится ли эта дата на текущий год, что определяется текущей датой и временем в системе.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Указывает, приходится ли заданное значение datetime `dateTime` на текущий год, что определяется текущей датой и временем в системе.

-   `dateTime`: значение `date`, `datetime` или `datetimezone`, которое необходимо оценить.


## Examples

### Example #1
Определить, приходится ли текущее системное время на текущий год.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
