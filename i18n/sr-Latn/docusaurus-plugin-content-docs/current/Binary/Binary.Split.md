---
title: Binary.Split
---

# Binary.Split


## Description

Deli navedenu binarnu datoteku na listu binarnih datoteka pomoću navedene veličine stranice.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Deli se <code>binary</code> na listu binarnih datoteka gde je prvi element izlazne liste binarna datoteka koja sadrži prvih <code>pageSize</code> bajtova sa     izvorne binarne datoteke, sledeći element sa izlazne liste je binarna datoteka koja sadrži sledećih <code>pageSize</code> bajtova sa izvorne binarne datoteke itd.



## Category
Binary
