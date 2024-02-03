---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Добавляет сведения о часовом поясе в значение даты и времени.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Добавляет сведения о часовом поясе в значение <code>dateTime</code>. Сведения о часовом поясе включают <code>timezoneHours</code> и <code>timezoneMinutes</code> (необязательно), которые указывают желаемое смещение от времени в формате UTC.


## Examples

### Example #1 
Настроить часовой пояс в формате UTC+7:30 (7 часов 30 минут после UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
