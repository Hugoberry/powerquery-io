---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Преобразует компонент часового пояса в часовой пояс в формате UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Изменяет данные о часовом значения даты и времени <code>dateTimeZone</code> в данные часового пояса в формате UTC или всемирного времени.    Если <code>dateTimeZone</code> не содержит компонента часового пояса, будут добавлены данные часового пояса UTC.


## Examples

### Example #1 
Изменяет данные о часовом поясе для #datetimezone (2010, 12, 31, 11, 56, 02, 7, 30) на UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
