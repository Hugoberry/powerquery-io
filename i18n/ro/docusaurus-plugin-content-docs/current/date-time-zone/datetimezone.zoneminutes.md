---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Obține minutele fusului orar al valorii.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Returnează componenta minutelor fusului orar a unei valori „datetimezone”.

-   `dateTimeZone`: o valoare `datetimezone` din care este extrasă componenta de minute fus orar. Dacă `dateTimeZone` este `null`, funcția returnează `null`.


## Examples

### Example #1
Obțineți componenta de minute de fus orar a valorii „datetimezone” specificate.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
