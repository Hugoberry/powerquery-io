---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Указывает, приходится ли эта дата на текущий год и идет ли она в течение текущего дня или после него, что определяется текущей датой и временем в системе.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Указывает, приходится ли заданное значение datetime `dateTime` на текущий год и идет ли оно в течение текущего дня или после него, что определяется текущей датой и временем в системе.

-   `dateTime`: значение `date`, `datetime` или `datetimezone`, которое необходимо оценить.


## Examples

### Example #1
Определить, относится ли текущее системное время к периоду, прошедшему с начала года.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
