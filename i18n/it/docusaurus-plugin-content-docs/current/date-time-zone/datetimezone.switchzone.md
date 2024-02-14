---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Modifica il fuso orario del valore.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Modifica le informazioni del fuso orario nel valore <code>dateTimeZone</code> di datetimezone impostando le nuove informazioni del fuso orario specificate da <code>timezoneHours</code> e facoltativamente <code>timezoneMinutes</code>.    Se <code>dateTimeZone</code> non è un componente del fuso orario, viene generata un'eccezione.


## Examples

### Example #1 
Modificare le informazioni del fuso orario per #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) su 8 ore.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
Modificare le informazioni del fuso orario per #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) su -30 minuti.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
