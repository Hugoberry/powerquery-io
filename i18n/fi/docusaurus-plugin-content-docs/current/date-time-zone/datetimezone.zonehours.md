---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Noutaa arvon aikavyöhyketunnit.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Palauttaa `datetimezone`\-arvon aikavyöhyketuntiosan.

-   `dateTimeZone`: `datetimezone`\-arvo, josta aikavyöhykkeen tuntikomponentti poimitaan. Jos `dateTimeZone` on arvoltaan `null`, funktio palauttaa arvon `null`.


## Examples

### Example #1
Hae määritetyn `datetimezone`\-arvon aikavyöhyketuntikomponentti.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
