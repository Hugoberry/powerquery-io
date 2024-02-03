---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


## Description

Указывает, приходится ли эта дата на текущий день, что определяется текущей датой и временем в системе.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Details

Указывает, приходится заданное значение datetime <code>dateTime</code> на текущий день, что определяется текущей датой и временем в системе.      <ul>      <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, которое необходимо оценить.</li>      </ul>


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
