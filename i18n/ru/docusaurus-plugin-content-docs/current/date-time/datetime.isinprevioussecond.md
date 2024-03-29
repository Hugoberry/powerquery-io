---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Указывает, приходятся ли заданные дата и время на предыдущую секунду, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую секунду, она возвращает false (ложь).


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Указывает, приходится ли заданное значение даты и времени <code>dateTime</code> на предыдущую секунду, опираясь на текущие дату и время в системе. При передаче функции значения, приходящегося на текущую секунду, она возвращает false (ложь).      <ul>      <li><code>dateTime</code>: значение <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс), для которого нужно произвести оценку.</li>      </ul>


## Examples

### Example #1 
Определяет, находится ли секунда, предшествующая текущему системному времени, в предыдущей секунде.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
