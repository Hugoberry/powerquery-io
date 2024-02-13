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

Указывает, приходится ли заданное значение datetime <code>dateTime</code> на текущий квартал, что определяется текущей датой и временем в системе.      <ul>      <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, которое необходимо оценить.</li>      </ul>


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
