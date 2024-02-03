---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


## Description

Указывает, приходятся ли заданные дата и время на определенное число следующих секунд, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую секунду, она возвращает false (ложь).


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на определенное число следующих секунд, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую секунду, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      <li><code>seconds</code>: количество секунд.</li>      </ul>


## Examples

### Example #1 
Определяет, находится ли секунда, следующая за текущим системным временем, в следующих двух секундах.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
