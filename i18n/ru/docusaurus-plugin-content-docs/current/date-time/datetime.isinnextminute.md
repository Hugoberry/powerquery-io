---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


Указывает, приходятся ли заданные дата и время на следующую минуту, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую минуту, она возвращает false (ложь).


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Remarks

Указывает, приходится ли заданное значение даты и времени `dateTime` на следующую минуту, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую минуту, она возвращает false (ложь).

-   `dateTime`: значение `datetime` (дата и время) или `datetimezone` (дата, время и часовой пояс), для которого нужно произвести оценку.


## Examples

### Example #1
Определяет, находится ли минута, следующая за текущим системным временем, в следующей минуте.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
