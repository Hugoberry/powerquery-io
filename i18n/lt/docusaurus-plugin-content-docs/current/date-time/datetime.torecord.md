---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Pateikiamas įrašas su datos ir laiko reikšmės dalimis.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Pateikiamas įrašas su nurodytos datos ir laiko reikšmės dalimis, `dateTime`.

-   `dateTime`: `datetime` reikšmė, kurią naudojant apskaičiuojamas jos dalių įrašas.


## Examples

### Example #1
Konvertuokite `#datetime(2011, 12, 31, 11, 56, 2)` reikšmę į įrašą, kuriame yra datos ir laiko reikšmės.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
