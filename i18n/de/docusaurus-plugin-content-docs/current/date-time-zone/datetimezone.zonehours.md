---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Ruft die Zeitzonenstunde des Werts ab.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Gibt die Zeitzonen-Stundenkomponente eines `datetimezone`\-Werts zurück.

-   `dateTimeZone`: Ein `datetimezone`\-Wert, aus dem die Zeitzonen-Stundenkomponente extrahiert wird. Wenn `dateTimeZone` `null` ist, gibt die Funktion `null` zurück.


## Examples

### Example #1
Ruft die Zeitzonen-Stundenkomponente des angegebenen `datetimezone`\-Werts ab.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
