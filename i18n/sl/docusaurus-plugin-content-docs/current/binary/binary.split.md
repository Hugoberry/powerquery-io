---
title: Binary.Split
---

# Binary.Split


Razdeli navedene dvojiške podatke na seznam dvojiških podatkov z uporabo navedene velikosti strani.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Razdeli `binary` na seznam dvojiških podatkov, kjer so prvi element seznama rezultatov dvojiški podatki, ki vsebujejo prvih `pageSize` bajtov iz izvornih dvojiških podatkov , naslednji element seznama rezultatov pa so dvojiški podatki, ki vsebujejo naslednjih `pageSize` bajtov iz izvornih dvojiških podatkov itd.



## Category
Binary
