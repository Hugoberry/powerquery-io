---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


Указывает, приходится ли заданная дата на определенное число предыдущих лет, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий год, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на определенное число предыдущих лет, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий год, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>date</code> (дата), <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      <li><code>years</code>: количество лет.</li>      </ul>


## Examples

### Example #1 
Определить, находится ли год до текущего системного времени в течение следующих двух лет.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
