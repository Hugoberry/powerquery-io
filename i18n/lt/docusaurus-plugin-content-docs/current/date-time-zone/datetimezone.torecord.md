---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Pateikiamas įrašas su datos ir laiko juostos reikšmės dalimis.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Pateikiamas įrašas su nurodytos datos ir laiko juostos reikšmės dalimis, `dateTimeZone`.

-   `dateTimeZone`: `datetimezone` reikšmė, kurią naudojant apskaičiuojamas jos dalių įrašas.


## Examples

### Example #1
Konvertuokite `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` reikšmę į įrašą, kuriame yra datos, laiko ir juostos reikšmės.
```powerquery
DateTimeZone.ToRecord(#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2,
      ZoneHours = 8,
      ZoneMinutes = 0
]
```




## Category
DateTimeZone
