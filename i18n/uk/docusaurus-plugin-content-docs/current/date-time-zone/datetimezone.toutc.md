---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Перетворює компонент часового поясу на часовий пояс UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Змінює інформацію про часовий пояс значення дати й часу `dateTimeZone` на інформацію про часовий пояс UTC або всесвітній координований час. Якщо `dateTimeZone` не має компонента часового поясу, додається інформація про часовий пояс UTC.


## Examples

### Example #1
Змінення інформації про часовий пояс для #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) на часовий пояс UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
