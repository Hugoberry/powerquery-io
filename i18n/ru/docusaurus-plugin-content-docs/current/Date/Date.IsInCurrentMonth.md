---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Указывает, приходится ли эта дата на текущий месяц, что определяется текущей датой и временем в системе.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Указывает, приходится ли заданное значение datetime <code>dateTime</code> на текущий месяц, что определяется текущей датой и временем в системе.      <ul>      <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, которое необходимо оценить.</li>      </ul>


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
