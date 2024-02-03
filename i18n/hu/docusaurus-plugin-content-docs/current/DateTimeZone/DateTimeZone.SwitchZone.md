---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

Módosítja az érték időzónáját.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Módosítja a(z) <code>dateTimeZone</code> datetimezone érték időzónára vonatkozó adatait a(z) <code>timezoneHours</code> és esetleg a(z) <code>timezoneMinutes</code> által megadott új időzónaadatokra.    Ha a(z) <code>dateTimeZone</code> nem tartalmaz időzóna összetevőt, a program kivételt vált ki.


## Examples

### Example #1 
A #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) érték időzónaadatainak módosítása 8 órára
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
A #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) érték időzónaadatainak módosítása -30 percre
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
