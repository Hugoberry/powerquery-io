---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


## Description

Указывает, приходится ли заданная дата на определенное число предыдущих недель, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую неделю, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на определенное число предыдущих недель, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую неделю, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>date</code> (дата), <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      <li><code>weeks</code>: количество недель.</li>      </ul>


## Examples

### Example #1 
Определить, находится ли неделя до текущего системного времени в течение следующих двух недель.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
