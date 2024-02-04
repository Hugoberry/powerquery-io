---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Fügt dem Datum/Uhrzeit-Wert Zeitzoneninformationen hinzu.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Fügt dem Wert <code>dateTime</code> Zeitzoneninformationen hinzu. Die Zeitzoneninformationen umfassen <code>timezoneHours</code> und optional <code>timezoneMinutes</code>, die den gewünschten Offset von der UTC-Zeit angeben.


## Examples

### Example #1 
Legen Sie die Zeitzone auf UTC+7:30 fest (7 Stunden und 30 Minuten nach UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
