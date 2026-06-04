---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Iegūst vērtības laika joslas minūtes.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Atgriež laika joslas minūtes elementu datetimezone vērtībai.

-   `dateTimeZone`: `datetimezone` vērtība, no kuras tiek izgūts laika joslas minūtes elements. Ja `dateTimeZone` ir `null`, funkcija atgriež `null`.


## Examples

### Example #1
Iegūst norādītās datetimezone vērtības laika joslas minūšu elementu.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
