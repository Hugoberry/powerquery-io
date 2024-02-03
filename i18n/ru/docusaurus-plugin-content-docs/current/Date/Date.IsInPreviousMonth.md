---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


## Description

Указывает, приходится ли заданная дата на предыдущий месяц, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий месяц, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Details

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на предыдущий месяц, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий месяц, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>date</code> (дата), <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      </ul>


## Examples

### Example #1 
Определить, приходится ли месяц, идущий до текущего системного времени, на предыдущий месяц.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
