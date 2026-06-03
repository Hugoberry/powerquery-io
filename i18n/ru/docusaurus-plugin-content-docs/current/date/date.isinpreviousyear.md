---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


Указывает, приходится ли заданная дата на предыдущий год, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий год, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Remarks

Указывает, приходится ли заданное значение даты и времени `dateTime` на предыдущий год, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий год, она возвращает false (ложь).

-   `dateTime`: значение `date` (дата), `datetime` (дата и время) или `datetimezone` (дата, время и часовой пояс), для которого нужно произвести оценку.


## Examples

### Example #1
Определить, приходится ли год, идущий до текущего системного времени, на предыдущий год.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
