---
title: Date.IsInNextYear
---

# Date.IsInNextYear


Указывает, приходится ли заданная дата на следующий год, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий год, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Remarks

Указывает, приходится ли заданное значение даты и времени `dateTime` на следующий год, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий год, она возвращает false (ложь).

-   `dateTime`: значение `date` (дата), `datetime` (дата и время) или `datetimezone` (дата, время и часовой пояс), для которого нужно произвести оценку.


## Examples

### Example #1
Определить, приходится ли год, идущий после текущего системного времени, на следующий год.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
