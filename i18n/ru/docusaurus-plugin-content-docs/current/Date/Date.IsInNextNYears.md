---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

Указывает, приходится ли заданная дата на определенное число следующих лет, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий год, она возвращает false (ложь).


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на определенное число следующих лет, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущий год, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>date</code> (дата), <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      <li><code>years</code>: количество лет.</li>      </ul>


## Examples

### Example #1 
Определить, находится ли год после текущего системного времени в течение следующих двух лет.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
