---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Повертає запис, що містить частини значення дати й часу з часовим поясом.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Повертає запис, що містить частини заданого значення дати й часу з часовим поясом `dateTimeZone`.

-   `dateTimeZone`: значення `datetimezone`, на основі якого слід обчислити запис частин.


## Examples

### Example #1
Перетворити значення `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` на запис, що містить значення дати, часу та часового поясу.
```powerquery
DateTimeZone.ToRecord(#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2,
      ZoneHours = 8,
      ZoneMinutes = 0
]
```




## Category
DateTimeZone
