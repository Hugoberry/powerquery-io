---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


Указывает, приходится ли заданная дата на следующий месяц, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий месяц, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Remarks

Указывает, приходится ли заданное значение даты и времени `dateTime` на следующий месяц, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий месяц, она возвращает false (ложь).

-   `dateTime`: значение `date` (дата), `datetime` (дата и время) или `datetimezone` (дата, время и часовой пояс), для которого нужно произвести оценку.


## Examples

### Example #1
Определить, приходится ли месяц, следующий после текущего системного времени, на следующий месяц.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
