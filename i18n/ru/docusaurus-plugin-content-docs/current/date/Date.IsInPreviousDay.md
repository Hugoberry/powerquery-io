---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


Указывает, приходится ли заданная дата на предыдущий день, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий день, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Remarks

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на предыдущий день, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий день, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>date</code> (дата), <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      </ul>


## Examples

### Example #1 
Определить, приходится ли день, идущий до текущего системного времени, на предыдущий день.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
