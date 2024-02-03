---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


## Description

Указывает, приходится ли заданная дата на следующий квартал, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий квартал, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Details

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на следующий квартал, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий квартал, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>date</code> (дата), <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      </ul>


## Examples

### Example #1 
Определить, приходится ли квартал, следующий после текущего системного времени, на следующий квартал.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
