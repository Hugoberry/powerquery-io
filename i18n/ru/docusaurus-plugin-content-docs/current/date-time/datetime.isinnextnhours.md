---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


Указывает, приходятся ли заданные дата и время на определенное число следующих часов, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий час, она возвращает false (ложь).


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Указывает, приходится ли заданное значение даты и времени `dateTime` на определенное число следующих часов, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий час, она возвращает false (ложь).

-   `dateTime`: значение `datetime` (дата и время) или `datetimezone` (дата, время и часовой пояс), для которого нужно произвести оценку.
-   `hours`: количество часов.


## Examples

### Example #1
Определяет, находится ли час, следующий за текущим системным временем, в следующих двух часах.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
