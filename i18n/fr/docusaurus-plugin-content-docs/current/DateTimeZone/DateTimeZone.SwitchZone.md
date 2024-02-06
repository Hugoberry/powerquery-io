---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Modifie le fuseau horaire de la valeur.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Remplace les informations de fuseau horaire de la valeur datetimezone <code>dateTimeZone</code> par les nouvelles informations de fuseau horaire fournies par <code>timezoneHours</code> et, au besoin, par <code>timezoneMinutes</code>.    Si <code>dateTimeZone</code> n'a pas de composant de fuseau horaire, une exception est levée.


## Examples

### Example #1 
Modifiez les informations de fuseau horaire pour #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) à 8 heures.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
Modifiez les informations de fuseau horaire pour #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) à -30 minutes.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
