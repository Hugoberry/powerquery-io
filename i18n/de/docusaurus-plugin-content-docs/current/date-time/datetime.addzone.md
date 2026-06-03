---
title: DateTime.AddZone
---

# DateTime.AddZone


Fügt dem Datum/Uhrzeit-Wert Zeitzoneninformationen hinzu.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Fügt dem Wert `dateTime` Zeitzoneninformationen hinzu. Die Zeitzoneninformationen umfassen `timezoneHours` und optional `timezoneMinutes`, die den gewünschten Offset von der UTC-Zeit angeben.


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
