---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


## Description

Указывает, приходится ли заданная дата на определенное число следующих кварталов, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий квартал, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на определенное число следующих кварталов, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий квартал, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>date</code> (дата), <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      <li><code>quarters</code>: количество кварталов.</li>      </ul>


## Examples

### Example #1 
Определить, находится ли квартал после текущего системного времени в течение следующих двух кварталов.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
