---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Указывает, приходится ли заданная дата на определенное число следующих лет, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий год, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Указывает, приходится ли заданное значение даты и времени `dateTime` на определенное число следующих лет, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий год, она возвращает false (ложь).

-   `dateTime`: значение `date` (дата), `datetime` (дата и время) или `datetimezone` (дата, время и часовой пояс), для которого нужно произвести оценку.
-   `years`: количество лет.


## Examples

### Example #1
Определить, находится ли год после текущего системного времени в течение следующих двух лет.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
