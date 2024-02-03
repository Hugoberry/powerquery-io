---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Modifică fusul orar al valorii.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Modifică informaţiile despre fusul orar din valoarea datetimezone <code>dateTimeZone</code> la noile informaţii despre fusul orar furnizate de <code>timezoneHours</code> şi, opţional, <code>timezoneMinutes</code>.    Dacă <code>dateTimeZone</code> nu conţine o componentă timezone, apare o excepţie.


## Examples

### Example #1 
Modificaţi informaţiile despre fusul orar pentru #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) la 8 ore.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
Modificaţi informaţiile despre fusul orar pentru #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) la -30 de minute.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
