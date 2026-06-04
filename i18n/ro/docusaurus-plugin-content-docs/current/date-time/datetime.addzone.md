---
title: DateTime.AddZone
---

# DateTime.AddZone


Adaugă informații despre fusul orar la valoarea datetime.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Adaugă informații despre fusul orar la valoarea `dateTime`. Informațiile despre fusul orar includ `timezoneHours` și, opțional, `timezoneMinutes`, care specifică decalajul dorit față de ora UTC.


## Examples

### Example #1
Setați fusul orar la UTC+7:30 (decalaj de 7 ore și 30 de minute față de UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
