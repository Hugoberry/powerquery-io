---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Pievieno informāciju par laika joslu datetime vērtībai.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Pievieno informāciju par laika joslu <code>dateTime</code> vērtībai. Informācija par laika joslu ietver <code>timezoneHours</code> un neobligāti <code>timezoneMinutes</code>, kas norāda vēlamo nobīdi no UTC laika.


## Examples

### Example #1 
Iestatiet laika joslu uz UTC+7:30 (7 stundas un 30 minūtes pēc UTC laika).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
