---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Dodaje informacije o vremenskoj zoni vrednosti datuma i vremena.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Dodaje informacije o vremenskoj zoni vrednosti <code>dateTime</code>. Informacije o vremenskoj zoni obuhvataju <code>timezoneHours</code> i opciono <code>timezoneMinutes</code>, što navodi željeni pomak od UTC vremena.


## Examples

### Example #1 
Podesite vremensku zonu na UTC+7:30 (7 časova i 30 minuta nakon UTC vremena).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
