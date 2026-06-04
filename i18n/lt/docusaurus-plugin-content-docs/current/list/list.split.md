---
title: List.Split
---

# List.Split


Nurodytas sąrašas išskaidomas į sąrašų sąrašą naudojant nurodytą puslapio dydį.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

`list` išskaidomas į sąrašų sąrašą, kuriame pirmasis išvesties sąrašo elementas yra sąrašas su pirmaisiais `pageSize` element. iš šaltinio sąrašo, antrasis išvesties sąrašo elementas yra sąrašas su kitais `pageSize` element. iš šaltinio sąrašo ir t. t.



## Category
List.Transformation functions
