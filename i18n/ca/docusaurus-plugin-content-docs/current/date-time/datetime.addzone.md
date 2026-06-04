---
title: DateTime.AddZone
---

# DateTime.AddZone


Afegeix la informació de fus horari al valor datetime.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Afegeix la informació de fus horari al valor `dateTime`. La informació de fus horari inclou `timezoneHours` i, opcionalment, `timezoneMinutes`, que especifiquen el desplaçament desitjat de l'hora UTC.


## Examples

### Example #1
Definiu el fus horari com a UTC+7:30 (7 hores i 30 minuts després de l'UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
