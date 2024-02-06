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

Указывает, приходится ли заданное значение datetime <code>dateTime</code> на текущую неделю, что определяется текущей датой и временем в системе.      <ul>      <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, которое необходимо оценить.</li>      </ul>


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
