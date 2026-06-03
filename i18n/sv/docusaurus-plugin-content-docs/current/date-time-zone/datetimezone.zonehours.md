---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Hämtar värdets tidszonstimma.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Returnerar komponenten för tidszonstimme för ett `datetimezone`\-värde.

-   `dateTimeZone`: Ett `datetimezone`\-värde som komponenten för tidszonstimme extraheras från. Om `dateTimeZone` är `null` returnerar funktionen `null`.


## Examples

### Example #1
Hämta komponenten för tidszonstimmar för det angivna värdet `datetimezone`.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
