---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Указывает, приходится ли эта дата на текущий год и идет ли она в течение текущего дня или после него, что определяется текущей датой и временем в системе.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Указывает, приходится ли заданное значение datetime <code>dateTime</code> на текущий год и идет ли оно в течение текущего дня или после него, что определяется текущей датой и временем в системе.      <ul>      <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, которое необходимо оценить.</li>      </ul>


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
