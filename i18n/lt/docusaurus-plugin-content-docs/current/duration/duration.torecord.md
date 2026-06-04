---
title: Duration.ToRecord
---

# Duration.ToRecord


Pateikiamas įrašas su trukmės dalimis.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Pateikiamas įrašas su trukmės reikšmės dalimis, `duration`.

-   `duration`: `duration`, kurią naudojant sukuriamas įrašas.


## Examples

### Example #1
Konvertuokite `#duration(2, 5, 55, 20)` į dalių įrašą, įtraukdami dienas, valandas, minutes ir sekundes, jei taikoma.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
