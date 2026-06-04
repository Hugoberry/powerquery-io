---
title: Binary.Split
---

# Binary.Split


Rozdelí zadaný binárny údaj na zoznam binárnych údajov použitím zadanej veľkosti stránky.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Rozdelí `binary` na zoznam binárnych súborov, kde prvým prvkom výstupného zoznamu je binárny súbor obsahujúci prvé bajty (`pageSize`) zo zdrojového binárneho súboru. Ďalším prvkom vo výstupnom zozname je binárny súbor obsahujúci ďalšie bajty (`pageSize`) zo zdrojového binárneho súboru atď.



## Category
Binary
