---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


Указывает, приходится ли заданная дата на определенное число предыдущих месяцев, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий месяц, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Указывает, приходится ли заданное значение даты и времени `dateTime` на определенное число предыдущих месяцев, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий месяц, она возвращает false (ложь).

-   `dateTime`: значение `date` (дата), `datetime` (дата и время) или `datetimezone` (дата, время и часовой пояс), для которого нужно произвести оценку.
-   `months`: количество месяцев.


## Examples

### Example #1
Определить, находится ли месяц до текущего системного времени в течение следующих двух месяцев.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
