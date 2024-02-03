---
title: DateTime.FixedLocalNow
---

# DateTime.FixedLocalNow


## Description

Возвращает текущую дату и время в местном часовом поясе. Это значение зафиксировано и не меняется при последующих вызовах.


## Syntax

```powerquery
DateTime.FixedLocalNow(

) as datetime
```


## Details

Возвращает значение <code>datetime</code>, равное текущей дате и времени в системе. Это значение зафиксировано и не меняется при последующих вызовах в отличие от DateTime.LocalNow, которое может возвращать разные значения по мере выполнения выражения.



## Category
DateTime
