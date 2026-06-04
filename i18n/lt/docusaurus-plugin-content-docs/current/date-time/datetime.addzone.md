---
title: DateTime.AddZone
---

# DateTime.AddZone


Įtraukiama „timezone“ informacija „datetime“ vertei.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Prie `dateTime` reikšmės pridedama „timezone“ informacija. „timezone“ informacija apima `timezoneHours` ir pasirinktinai `timezoneMinutes`, nurodantį norimą poslinkį nuo UTC laiko.


## Examples

### Example #1
Nustatykite laiko juostą į UTC+7:30 (prie UTC laiko pridėjus 7 valandas ir 30 minučių).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
