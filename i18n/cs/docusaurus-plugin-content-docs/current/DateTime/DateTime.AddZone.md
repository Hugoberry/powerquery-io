---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Přidá informace o časovém pásmu do hodnoty datetime.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Přidá informace o časovém pásmu do hodnoty <code>dateTime</code>. Informace o časovém pásmu zahrnují <code>timezoneHours</code> a volitelně <code>timezoneMinutes</code>, které určují požadovaný posun od času UTC.


## Examples

### Example #1 
Nastaví časové pásmo na UTC+7:30 (7 hodin a 30 minut po UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
