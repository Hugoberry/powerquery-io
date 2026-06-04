---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Obține ora fusului orar al valorii.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Returnează componenta de oră de fus orar a unei valori `datetimezone`.

-   `dateTimeZone`: o valoare `datetimezone` din care este extrasă componenta orei fusului orar. Dacă `dateTimeZone` este `null`, funcția returnează `null`.


## Examples

### Example #1
Obțineți componenta de ore de fus orar a valorii `datetimezone` specificată.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
