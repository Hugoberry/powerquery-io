---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Отримує хвилини часового поясу значення.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Повертає компонент хвилин часового поясу значення "datetimezone".

-   `dateTimeZone`: значення `datetimezone`, з якого видобувається компонент хвилини часового поясу. Якщо `dateTimeZone` має значення `null`, функція повертає `null`.


## Examples

### Example #1
Отримайте компонент хвилини часового поясу вказаного значення "datetimezone".
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
