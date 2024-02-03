---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Изменяет часовой пояс значения.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Изменяет данные часового пояса в значении datetimezone <code>dateTimeZone</code> на новые данные о часовом поясе из <code>timezoneHours</code> и при необходимости <code>timezoneMinutes</code>.    Если <code>dateTimeZone</code> не содержит компонент часового пояса, возникает исключение.


## Examples

### Example #1 
Изменяет данные о часовом поясе для #datetimezone (2010, 12, 31, 11, 56, 02, 7, 30) на 8 часов.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
Изменяет данные о часовом поясе для #datetimezone (2010, 12, 31, 11, 56, 02, 7, 30) на -30 минут.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
