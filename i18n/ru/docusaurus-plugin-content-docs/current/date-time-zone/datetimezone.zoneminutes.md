---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Получает минуты значения для данного часового пояса.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Возвращает компонент минут значения "datetimezone" для часового пояса.

-   `dateTimeZone`: значение типа `datetimezone`, из которого извлекается минутная составляющая часового пояса. Если значение `dateTimeZone` равно `null`, функция возвращает `null`.


## Examples

### Example #1
Получение компонента минут часового пояса указанного значения "datetimezone".
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
