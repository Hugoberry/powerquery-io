---
title: DateTime.AddZone
---

# DateTime.AddZone


Hiermee voegt u tijdzonegegevens toe aan de datum/tijd-waarde.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Hiermee voegt u informatie over de tijdzone toe aan de <code>dateTime</code>-waarde. De informatie over de tijdzone bevat <code>timezoneHours</code> en optioneel <code>timezoneMinutes</code>, waarmee de gewenste verschil met de UTC-tijd wordt opgegeven.


## Examples

### Example #1 
Stel de tijdzone in op UTC+7:30 (7 uur en 30 minuten na UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
