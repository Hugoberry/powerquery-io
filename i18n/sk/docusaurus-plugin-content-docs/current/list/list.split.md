---
title: List.Split
---

# List.Split


Rozdelí zadaný zoznam na zoznam zoznamov použitím zadanej veľkosti stránky.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Rozdelí `list` na zoznam zoznamov, kde prvým prvkom výstupného zoznamu je zoznam obsahujúci prvé prvky (`pageSize`) zo zdrojového zoznamu. Ďalším prvkom vo výstupnom zozname je zoznam obsahujúci ďalšie prvky (`pageSize`) zo zdrojového zoznamu atď.



## Category
List.Transformation functions
