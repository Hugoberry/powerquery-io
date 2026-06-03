---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Получает час часового пояса для значения.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Возвращает компонент часов часового пояса значения `datetimezone`.

-   `dateTimeZone`: значение `datetimezone`, из которого извлекается компонент часов часового пояса. Если значение `dateTimeZone` равно `null`, функция возвращает `null`.


## Examples

### Example #1
Получение компонента часов часового пояса указанного значения `datetimezone`.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
