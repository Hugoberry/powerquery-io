---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Hozzáadja az időzóna információt a datetime értékhez.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Időzónadatokat ad hozzá a(z) <code>dateTime</code> értékhez. Az időzónára vonatkozó információk <code>timezoneHours</code> és opcionálisan <code>timezoneMinutes</code>, amelyek meghatározzák az UTC-idő kívánt eltolódását.


## Examples

### Example #1 
Állítsa be az időzónát UTC+7:30-ra (7 órával és 30 perccel UTC után).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
