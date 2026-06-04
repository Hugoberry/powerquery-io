---
title: DateTime.AddZone
---

# DateTime.AddZone


Додає відомості про часовий пояс до значення дати й часу.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Додає відомості про часовий пояс до значення `dateTime`. Відомості про часовий пояс включають `timezoneHours` і, за потреби, `timezoneMinutes` із зазначенням бажаного зсуву відносно UTC.


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
