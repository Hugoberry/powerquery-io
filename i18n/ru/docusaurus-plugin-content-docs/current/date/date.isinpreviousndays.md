---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


Указывает, приходится ли заданная дата на определенное число предыдущих дней, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий день, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Указывает, приходится ли заданное значение даты и времени `dateTime` на определенное число предыдущих дней, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий день, она возвращает false (ложь).

-   `dateTime`: значение `date` (дата), `datetime` (дата и время) или `datetimezone` (дата, время и часовой пояс), для которого нужно произвести оценку.
-   `days`: количество дней.


## Examples

### Example #1
Определить, находится ли день до текущего системного времени в течение следующих двух дней.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
