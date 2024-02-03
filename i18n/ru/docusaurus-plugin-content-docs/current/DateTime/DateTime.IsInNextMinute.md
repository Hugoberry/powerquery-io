---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


## Description

Указывает, приходятся ли заданные дата и время на следующую минуту, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую минуту, она возвращает false (ложь).


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Details

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на следующую минуту, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую минуту, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      </ul>


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
