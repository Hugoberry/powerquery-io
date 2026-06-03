---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Ruft die Zeitzonenminuten des Werts ab.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Gibt die Zeitzonen-Minutenkomponente eines datetimezone-Werts zurück.

-   `dateTimeZone`: Ein `datetimezone`\-Wert, aus dem die Zeitzonen-Minutenkomponente extrahiert wird. Wenn `dateTimeZone` `null` ist, gibt die Funktion `null` zurück.


## Examples

### Example #1
Ruft die Zeitzonen-Minutenkomponente des angegebenen Zeitzonen-Datumswerts ab.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
