---
title: DateTime.AddZone
---

# DateTime.AddZone


K hodnote dátumu a času pridá informáciu o časovom pásme.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

K hodnote `dateTime` pridá informáciu o časovom pásme. Informácia o časovom pásme zahŕňa `timezoneHours` a voliteľne `timezoneMinutes`, čím sa určuje požadovaný posun od času UTC.


## Examples

### Example #1
Nastaví časové pásmo na UTC+7:30 (7 hodín a 30 minút po UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
