---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Змінює часовий пояс значення.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Змінює інформацію про часовий пояс у значенні дати й часу з часовим поясом <code>dateTimeZone</code> на нову інформацію про часовий пояс, надану <code>timezoneHours</code> та, необов'язково, <code>timezoneMinutes</code>.    Якщо <code>dateTimeZone</code> не має компонента часового поясу, повертається виняткова ситуація.


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
