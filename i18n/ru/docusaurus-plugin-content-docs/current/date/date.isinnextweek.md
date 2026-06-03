---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


Указывает, приходится ли заданная дата на следующую неделю, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую неделю, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Remarks

Указывает, приходится ли заданное значение даты и времени `dateTime` на следующую неделю, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую неделю, она возвращает false (ложь).

-   `dateTime`: значение `date` (дата), `datetime` (дата и время) или `datetimezone` (дата, время и часовой пояс), для которого нужно произвести оценку.


## Examples

### Example #1
Определить, приходится ли неделя, идущая после текущего системного времени, на следующую неделю.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
