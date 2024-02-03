---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Lisää aikavyöhyketiedot datetime-arvoon.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Lisää aikavyöhyketiedot <code>dateTime</code>-arvoon. Aikavyöhyketietoihin kuuluu <code>timezoneHours</code> sekä valinnaisesti <code>timezoneMinutes</code>, joka määrittää halutun siirtymän UTC-ajasta.


## Examples

### Example #1 
Aseta aikavyöhykkeeksi UTC+7:30 (7 tuntia ja 30 minuuttia UTC-ajan jälkeen).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
