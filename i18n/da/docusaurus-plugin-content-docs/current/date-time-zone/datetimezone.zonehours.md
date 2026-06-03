---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Henter timen for tidszonen for værdien.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Returnerer timekomponenten for tidszonen for en værdi af typen `datetimezone`.

-   `dateTimeZone`: En værdi af typen `datetimezone` som timekomponenten for tidszonen udtrækkes fra. Hvis `dateTimeZone` er `null`, returnerer funktionen `null`.


## Examples

### Example #1
Hent timekomponenten for tidszonen for den angivne værdi for `datetimezone`.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
