---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Hämtar tidszonsminuterna för värdet.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Returnerar tidszonsminuterkomponenten för ett datetimezone-värde.

-   `dateTimeZone`: Ett `datetimezone`\-värde som komponenten för tidszonsminuter extraheras från. Om `dateTimeZone` är `null` returnerar funktionen `null`.


## Examples

### Example #1
Hämta komponenten för tidszonsminuter för det angivna \`datetimezone\`-värdet.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
