---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Pakeičiama reikšmės laiko juosta.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Laiko juostos informacija datos ir laiko juostos reikšmėje `dateTimeZone` pakeičiama į naują laiko juostos informaciją, pateiktą `timezoneHours` ir pasirinktinai `timezoneMinutes`. Jei `dateTimeZone` neturi laiko juostos komponento, pateikiama klaida.


## Examples

### Example #1
Pakeiskite #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) laiko juostos informaciją į 8 valandas.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
Pakeiskite #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) laiko juostos informaciją į -30 min.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
