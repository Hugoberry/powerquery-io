---
title: DateTime.AddZone
---

# DateTime.AddZone


Aggiunge informazioni sul fuso orario al valore datetime.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Aggiunge informazioni sul fuso orario al valore <code>dateTime</code>. Le informazioni sul fuso orario includono <code>timezoneHours</code> e facoltativamente <code>timezoneMinutes</code>, che specificano l'offset desiderato dall'ora UTC.


## Examples

### Example #1 
Impostare il fuso orario su UTC+7:30 (7 ore e 30 minuti dopo l&#39;ORA UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
