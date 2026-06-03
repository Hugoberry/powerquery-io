---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


Указывает, приходится ли заданная дата на определенное число следующих недель, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую неделю, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Указывает, приходится ли заданное значение даты и времени `dateTime` на определенное число следующих недель, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую неделю, она возвращает false (ложь).

-   `dateTime`: значение `date` (дата), `datetime` (дата и время) или `datetimezone` (дата, время и часовой пояс), для которого нужно произвести оценку.
-   `weeks`: количество недель.


## Examples

### Example #1
Определить, находится ли неделя после текущего системного времени в течение следующих двух недель.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
