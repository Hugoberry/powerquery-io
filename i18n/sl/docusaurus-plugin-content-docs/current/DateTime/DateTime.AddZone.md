---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Doda informacije o časovnem pasu za vrednost &#34;datetime&#34;.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Doda informacije o časovnem pasu za vrednost <code>dateTime</code>. Informacije o časovnem pasu vključujejo <code>timezoneHours</code> in izbirno <code>timezoneMinutes</code>, kar določa želeni odmik od časa UTC.


## Examples

### Example #1 
Nastavite časovni pas na UTC+7:30 (7 ur in 30 minut po času UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
