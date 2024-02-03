---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Додає відомості про часовий пояс до значення дати й часу.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Додає відомості про часовий пояс до значення <code>dateTime</code>. Відомості про часовий пояс включають <code>timezoneHours</code> і, за потреби, <code>timezoneMinutes</code> із зазначенням бажаного зсуву відносно UTC.


## Examples

### Example #1 
Установіть часовий пояс на UTC+7:30 (на 7 годин 30 хвилин пізніше за UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
