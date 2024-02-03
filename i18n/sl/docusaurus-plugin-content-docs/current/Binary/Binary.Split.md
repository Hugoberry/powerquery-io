---
title: Binary.Split
---

# Binary.Split


## Description

Razdeli navedene dvojiške podatke na seznam dvojiških podatkov z uporabo navedene velikosti strani.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Razdeli <code>binary</code> na seznam dvojiških podatkov, kjer so prvi element seznama rezultatov dvojiški podatki, ki vsebujejo prvih <code>pageSize</code> bajtov iz izvornih dvojiških podatkov ,
    naslednji element seznama rezultatov pa so dvojiški podatki, ki vsebujejo naslednjih <code>pageSize</code> bajtov iz izvornih dvojiških podatkov itd.



## Category
Binary
