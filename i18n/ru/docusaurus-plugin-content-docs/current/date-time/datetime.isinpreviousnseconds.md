---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


Указывает, приходятся ли заданные дата и время на определенное число предыдущих секунд, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую секунду, она возвращает false (ложь).


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Указывает, приходится ли заданное значение даты и времени `dateTime` на определенное число предыдущих секунд, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую секунду, она возвращает false (ложь).

-   `dateTime`: значение `datetime` (дата и время) или `datetimezone` (дата, время и часовой пояс), для которого нужно произвести оценку.
-   `seconds`: количество секунд.


## Examples

### Example #1
Определяет, находится ли секунда, предшествующая текущему системному времени, в предыдущих двух секундах.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
