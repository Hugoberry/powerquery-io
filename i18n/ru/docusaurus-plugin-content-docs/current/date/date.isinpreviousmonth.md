---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


Указывает, приходится ли заданная дата на предыдущий месяц, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий месяц, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Remarks

Указывает, приходится ли заданное значение даты и времени `dateTime` на предыдущий месяц, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий месяц, она возвращает false (ложь).

-   `dateTime`: значение `date` (дата), `datetime` (дата и время) или `datetimezone` (дата, время и часовой пояс), для которого нужно произвести оценку.


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
