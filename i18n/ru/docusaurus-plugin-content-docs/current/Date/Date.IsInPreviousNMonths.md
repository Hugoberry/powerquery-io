---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

Указывает, приходится ли заданная дата на определенное число предыдущих месяцев, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий месяц, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на определенное число предыдущих месяцев, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий месяц, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>date</code> (дата), <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      <li><code>months</code>: количество месяцев.</li>      </ul>


## Examples

### Example #1 
Определить, находится ли месяц до текущего системного времени в течение следующих двух месяцев.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
