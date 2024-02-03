---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


## Description

Указывает, приходятся ли заданные дата и время на предыдущий час, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий час, она возвращает false (ложь).


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Details

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на предыдущий час, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий час, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      </ul>


## Examples

### Example #1 
Определяет, находится ли час, предшествующий текущему системному времени, в предыдущем часе.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
