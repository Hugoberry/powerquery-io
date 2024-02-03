---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Nuskaitomas dvejetainis srautas ir bandoma nustatyti informaciją apie jo turinio tipą bei formatą.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Pateikiamas įrašas su lauku Content.Type, kuriame nurodytas numanomas MIME tipas.    Jei numanomas turinio tipas yra text/\* ir aptinkama kodavimo kodų lentelė, taip pat pateikiamas laukas Content.Encoding, kuriame nurodytas srauto kodavimas.    Jei numanomas turinio tipas yra text/csv, o formatas yra su skyrikliais, taip pat pateikiamas laukas Csv.PotentialDelimiter, kuriame yra lentelė galimų skyriklių analizei.    Jei numanomas turinio tipas yra text/csv, o formatas yra fiksuoto pločio, taip pat pateikiamas laukas Csv.PotentialPositions su analizuotinu galimų fiksuoto pločio stulpelių padėčių sąrašu.



## Category
Binary
