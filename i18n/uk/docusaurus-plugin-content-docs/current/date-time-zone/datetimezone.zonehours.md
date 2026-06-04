---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Отримує годину часового поясу значення.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Повертає компонент години часового поясу значення `datetimezone`.

-   `dateTimeZone`: значення `datetimezone`, з якого видобувається компонент години часового поясу. Якщо `dateTimeZone` має значення `null-`, функція повертає `null`.


## Examples

### Example #1
Отримайте компонент години часового поясу вказаного значення `datetimezone`.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
