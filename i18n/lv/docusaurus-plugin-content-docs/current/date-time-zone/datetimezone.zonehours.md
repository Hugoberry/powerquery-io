---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Iegūst vērtības laika joslas stundu.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Atgriež `datetimezone` vērtības laika joslas stundas elementu.

-   `dateTimeZone`: `datetimezone` vērtība, no kuras tiek izgūts laika joslas stundas elements. Ja `dateTimeZone` ir `null`, funkcija atgriež `null`.


## Examples

### Example #1
Iegūt norādītās laika joslas stundas vērtības norādītajai `datetimezone` vērtībai.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
