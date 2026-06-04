---
title: Time.ToRecord
---

# Time.ToRecord


Pateikiamas įrašas su laiko reikšmės dalimis.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Pateikiamas įrašas su pateiktos laiko reikšmės dalimis: `time`.

-   `time`: `time` reikšmė, kurią naudojant apskaičiuojamas dalių įrašas.


## Examples

### Example #1
Konvertuokite `#time(11, 56, 2)` reikšmę į įrašą, kuriame yra laiko reikšmės.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
