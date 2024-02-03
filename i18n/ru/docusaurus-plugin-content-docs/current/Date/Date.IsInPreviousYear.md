---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


## Description

Указывает, приходится ли заданная дата на предыдущий год, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий год, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Details

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на предыдущий год, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий год, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>date</code> (дата), <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      </ul>


## Examples

### Example #1 
Определить, приходится ли год, идущий до текущего системного времени, на предыдущий год.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
