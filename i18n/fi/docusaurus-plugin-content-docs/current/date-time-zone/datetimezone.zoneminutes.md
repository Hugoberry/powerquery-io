---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Noutaa arvon aikavyöhykeminuutit.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Palauttaa datetimezone-arvon aikavyöhykeminuuttiosan.

-   `dateTimeZone`: `datetimezone`\-arvo, josta aikavyöhykeminuuttikomponentti poimitaan. Jos `dateTimeZone` on arvoltaan `null`, funktio palauttaa arvon `null`.


## Examples

### Example #1
Hae määritetyn datetimezone-arvon aikavyöhykeminuutit-osa.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
