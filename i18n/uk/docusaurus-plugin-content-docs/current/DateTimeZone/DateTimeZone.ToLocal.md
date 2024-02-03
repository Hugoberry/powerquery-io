---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Перетворює компонент часового поясу на місцевий часовий пояс.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Змінює інформацію про часовий пояс значення дати й часу з часовим поясом <code>dateTimeZone</code> на інформацію про місцевий часовий пояс.    Якщо <code>dateTimeZone</code> не має компонента часового поясу, додається інформація про місцевий часовий пояс.


## Examples

### Example #1 
Змінення інформації про часовий пояс для #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) на місцевий часовий пояс (для цього прикладу місцевим вважається Тихоокеанський час).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
