---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


## Description

Указывает, приходится ли заданная дата на следующую неделю, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую неделю, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Details

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на следующую неделю, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую неделю, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>date</code> (дата), <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      </ul>


## Examples

### Example #1 
Определить, приходится ли неделя, идущая после текущего системного времени, на следующую неделю.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
