---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Hiermee wordt de tijdzone in uren van de waarde opgehaald.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Retourneert het onderdeel tijdzone in uren van een `datetimezone` waarde.

-   `dateTimeZone`: een `datetimezone` waarde waaruit het onderdeel tijdzone in uren wordt geëxtraheerd. Als `dateTimeZone` `null` is, retourneert de functie `null`.


## Examples

### Example #1
Ontvang het onderdeel tijdzone in uren van de opgegeven waarde `datetimezone`.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
