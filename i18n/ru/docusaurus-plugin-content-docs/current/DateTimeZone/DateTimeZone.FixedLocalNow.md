---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


Возвращает текущую дату и время в местном часовом поясе. Это значение зафиксировано и не меняется при последующих вызовах.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

Возвращает значение <code>datetime</code>, равное текущей дате и времени в системе. Возвращенное значение содержит сведения о часовом поясе, представляющем местный часовой пояс. Это значение зафиксировано и не меняется при последующих вызовах в отличие от DateTimeZone.LocalNow, которое может возвращать разные значения по мере выполнения выражения.



## Category
DateTimeZone
