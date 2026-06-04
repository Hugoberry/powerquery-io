---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Видаляє інформацію про часовий пояс із заданого значення дати й часу з часовим поясом.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Повертає значення #datetime із `dateTimeZone` з видаленою інформацією про часовий пояс.


## Examples

### Example #1
Видалення інформації про часовий пояс із значення #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
