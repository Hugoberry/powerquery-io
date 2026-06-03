---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Hiermee wordt de tijdzone in minuten van de waarde opgehaald.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Retourneert de minuten van de tijdzone van een datum/tijdzone-waarde.

-   `dateTimeZone`: een `datetimezone` waarde waaruit het onderdeel tijdzone in minuten wordt geëxtraheerd. Als `dateTimeZone` `null` is, retourneert de functie `null`.


## Examples

### Example #1
Haal het onderdeel tijdzone in minuten van de opgegeven waarde 'datetimezone' op.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
