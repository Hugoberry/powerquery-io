---
title: Date.ToRecord
---

# Date.ToRecord


Pateikiamas įrašas su datos reikšmės dalimis.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Pateikiamas įrašas su pateiktos datos reikšmės dalimis, `date`.

-   `date`: `date` reikšmė, kurią naudojant apskaičiuojamas jos dalių įrašas.


## Examples

### Example #1
Konvertuokite `#date(2011, 12, 31)` reikšmę į įrašą, kuriame yra datos reikšmės dalys.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
