---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Menja vremensku zonu vrednosti.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Menja informacije o vremenskoj zoni za vrednost datuma i vremenske zone `dateTimeZone` u informacije o novoj vremenskoj zoni koje obezbeđuje `timezoneHours` i opcionalno `timezoneMinutes`. Ako `dateTimeZone` nema komponentu vremenske zone, prijavljuje se greška.


## Examples

### Example #1
Promena informacija o vremenskoj zoni za #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) na 8 sati.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
Promena informacija o vremenskoj zoni za #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) na -30 minuta.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
