---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Ajoute les informations de fuseau horaire pour la valeur Date/Heure.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Ajoute des informations de fuseau horaire à la valeur <code>dateTime</code>. Les informations de fuseau horaire incluent <code>timezoneHours</code> et éventuellement <code>timezoneMinutes</code>, qui spécifient le décalage souhaité par rapport à l’heure UTC.


## Examples

### Example #1 
Définissez le fuseau horaire sur UTC+7:30 (7 heures et 30 minutes après UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
