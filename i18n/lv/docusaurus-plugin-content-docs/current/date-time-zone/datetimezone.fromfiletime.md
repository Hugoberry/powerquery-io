---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


Izveido datetimezone vērtību no 64 bitu gara skaitļa.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Remarks

Izveido vērtību `datetimezone` no vērtības `fileTime` un konvertē to uz vietējo laika joslu. Vērtība filetime ir Windows faila laika vērtība, kas ataino 100 nanosekunžu intervālu skaitu, kuri ir pagājuši kopš m.ē. 1601. gada 1. janvāra plkst. 24:00 pēc universālā koordinētā laika (UTC).


## Examples

### Example #1
Konvertēt `129876402529842245` par datetimezone vērtību.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
