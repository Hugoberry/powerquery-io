---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Dvejetainė reikšmė kaupiama atmintyje.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Dvejetainė reikšmė kaupiama atmintyje. Šio iškvietimo rezultatas yra pastovi dvejetainė reikšmė, kuri turės nustatytą ilgį ir baitų eilę.


## Examples

### Example #1 
Sukurkite pastovią dvejetainės reikšmės versiją.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
