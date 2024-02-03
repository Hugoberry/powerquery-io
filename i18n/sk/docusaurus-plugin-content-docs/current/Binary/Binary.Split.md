---
title: Binary.Split
---

# Binary.Split


## Description

Rozdelí zadaný binárny údaj na zoznam binárnych údajov použitím zadanej veľkosti stránky.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Rozdelí <code>binary</code> na zoznam binárnych súborov, kde prvým prvkom výstupného zoznamu je binárny súbor obsahujúci prvé bajty (<code>pageSize</code>) zo    zdrojového binárneho súboru. Ďalším prvkom vo výstupnom zozname je binárny súbor obsahujúci ďalšie bajty (<code>pageSize</code>) zo zdrojového binárneho súboru atď.



## Category
Binary
