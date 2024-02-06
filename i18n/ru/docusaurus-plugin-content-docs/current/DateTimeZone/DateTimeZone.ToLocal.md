---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


Преобразует компонент часового пояса в локальный часовой пояс.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Изменяет данные о часовом поясе значения datetimezone <code>dateTimeZone</code> на локальный часовой пояс.    Если <code>dateTimeZone</code> не содержит компонента часового пояса, будут добавлены данные локальные часового пояса.


## Examples

### Example #1 
Изменение сведений о часовом поясе для #datetimezone (2010, 12, 31, 11, 56, 02, 7, 30) на локальный часовой пояс (по тихоокеанскому времени).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
