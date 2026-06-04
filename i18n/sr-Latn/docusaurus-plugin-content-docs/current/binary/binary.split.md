---
title: Binary.Split
---

# Binary.Split


Deli navedenu binarnu datoteku na listu binarnih datoteka pomoću navedene veličine stranice.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Deli se `binary` na listu binarnih datoteka gde je prvi element izlazne liste binarna datoteka koja sadrži prvih `pageSize` bajtova sa izvorne binarne datoteke, sledeći element sa izlazne liste je binarna datoteka koja sadrži sledećih `pageSize` bajtova sa izvorne binarne datoteke itd.



## Category
Binary
