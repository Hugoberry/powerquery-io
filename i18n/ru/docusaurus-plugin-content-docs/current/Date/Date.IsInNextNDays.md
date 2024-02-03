---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


## Description

Указывает, приходится ли заданная дата на определенное число следующих дней, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий день, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на определенное число следующих дней, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий день, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>date</code> (дата), <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      <li><code>days</code>: количество дней.</li>      </ul>


## Examples

### Example #1 
Определить, находится ли день после текущего системного времени в течение следующих двух дней.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
