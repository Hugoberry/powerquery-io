---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Змінює часовий пояс значення.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Змінює інформацію про часовий пояс у значенні дати й часу з часовим поясом `dateTimeZone` на нову інформацію про часовий пояс, надану `timezoneHours` і, необов’язково, `timezoneMinutes`. Якщо `dateTimeZone` не має компонента часового поясу, стається помилка.


## Examples

### Example #1
Змінення інформації про часовий пояс для #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) на 8 годин.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
Змінення інформації про часовий пояс для #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) на 30 хвилин менше.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
