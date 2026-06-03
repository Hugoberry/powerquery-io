---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Указывает, приходится ли заданная дата на определенное число предыдущих кварталов, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий квартал, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Указывает, приходится ли заданное значение даты и времени `dateTime` на определенное число предыдущих кварталов, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий квартал, она возвращает false (ложь).

-   `dateTime`: значение `date` (дата), `datetime` (дата и время) или `datetimezone` (дата, время и часовой пояс), для которого нужно произвести оценку.
-   `quarters`: количество кварталов.


## Examples

### Example #1
Определить, находится ли квартал до текущего системного времени в течение следующих двух кварталов.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
