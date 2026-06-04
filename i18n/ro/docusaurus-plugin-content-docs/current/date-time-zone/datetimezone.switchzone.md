---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Modifică fusul orar al valorii.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Modifică informațiile despre fusul orar din valoarea datetimezone `dateTimeZone` la noile informații despre fusul orar furnizate de `timezoneHours` și, opțional, `timezoneMinutes`. Dacă `dateTimeZone` nu conține o componentă de fus orar, se generează o eroare.


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
