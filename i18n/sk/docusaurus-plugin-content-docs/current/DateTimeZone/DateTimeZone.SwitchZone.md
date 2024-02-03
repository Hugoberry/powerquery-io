---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Zmení časové pásmo hodnoty.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Zmení informácie o časovom pásme týkajúce sa hodnoty datetimezone <code>dateTimeZone</code> na nové informácie o časovom pásme uvedené vo funkcii <code>timezoneHours</code> a voliteľne <code>timezoneMinutes</code>.    Ak funkcia <code>dateTimeZone</code> neobsahuje komponent časového pásma, dôjde k výnimke.


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
