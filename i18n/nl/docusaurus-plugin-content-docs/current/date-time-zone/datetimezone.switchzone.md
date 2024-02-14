---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Wijzigt de tijdzone van de waarde.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Wijzigt informatie over de tijdzone van de datum-/tijdzonewaarde <code>dateTimeZone</code> in de nieuwe informatie over de tijdzone die wordt opgegeven door <code>timezoneHours</code> en optioneel door <code>timezoneMinutes</code>.    Als <code>dateTimeZone</code> geen tijdzonegedeelte heeft, wordt er een uitzondering gegenereerd.


## Examples

### Example #1 
Informatie over de tijdzone wijzigen voor #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) in 8 uur.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
Informatie over de tijdzone wijzigen voor #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) in -30 minuten
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
