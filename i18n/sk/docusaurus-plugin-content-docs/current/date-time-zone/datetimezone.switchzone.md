---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Zmení časové pásmo hodnoty.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Zmení informácie o časovom pásme týkajúce sa hodnoty datetimezone `dateTimeZone` na nové informácie o časovom pásme uvedené vo funkcii `timezoneHours` a voliteľne `timezoneMinutes`. Ak `dateTimeZone` nemá komponent časového pásma, vyvolá sa chyba.


## Examples

### Example #1
Zmeňte informácie o časovom pásme pre hodnotu #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) na 8 hodín.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
Zmeňte informácie o časovom pásme pre položku #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) na hodnotu –30 minút.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
