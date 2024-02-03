---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


## Description

Указывает, приходятся ли заданные дата и время на определенное число предыдущих часов, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий час, она возвращает false (ложь).


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на определенное число предыдущих часов, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий час, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      <li><code>hours</code>: количество часов.</li>      </ul>


## Examples

### Example #1 
Определяет, находится ли час, предшествующий текущему системному времени, в предыдущих двух часах.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
