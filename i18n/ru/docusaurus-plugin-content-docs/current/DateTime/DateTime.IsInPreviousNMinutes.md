---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


## Description

Указывает, приходятся ли заданные дата и время на определенное число предыдущих минут, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую минуту, она возвращает false (ложь).


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на определенное число предыдущих минут, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую минуту, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      <li><code>minutes</code>: количество минут.</li>      </ul>


## Examples

### Example #1 
Определяет, находится ли минута, предшествующая текущему системному времени, в предыдущих двух минутах.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
