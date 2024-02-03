---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

Возвращает число (от 0 до 6), соответствующее дню недели предоставленного значения.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

Возвращает число (от 0 до 6), соответствующее дню недели предоставленного значения <code>dateTime</code>.  <ul>        <li><code>dateTime</code>: значение <code>date</code> (дата), <code>datetime</code> (дата и время) или <code>datetimezone</code> (дата, время и часовой пояс).</li>        <li><code>firstDayOfWeek</code>: значение <code>Day</code> (День), которое будет считаться первым днем недели. Допустимые значения: Day.Sunday (воскресенье), Day.Monday (понедельник), Day.Tuesday (вторник), Day.Wednesday (среда), Day.Thursday (четверг), Day.Friday (пятница) или Day.Saturday (суббота). Если значение не указано, будет взято значение по умолчанию из региональных параметров.</li>      </ul>


## Examples

### Example #1 
Возвращает день недели, на который выпадает понедельник, 21 февраля 2011 г., если первым днем недели считается воскресенье.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Возвращает день недели, на который выпадает понедельник, 21 февраля 2011 г., если первым днем недели считается понедельник.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
