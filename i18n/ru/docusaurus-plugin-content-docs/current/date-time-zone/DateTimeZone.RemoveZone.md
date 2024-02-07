---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Удаляет данные о часовом поясе из заданного значения datetimezone.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Возвращает значение #datetime из <code>dateTimeZone</code> с удаленными данными часового пояса.


## Examples

### Example #1 
Удалить данные часового пояса из значения #datetimezone (2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
