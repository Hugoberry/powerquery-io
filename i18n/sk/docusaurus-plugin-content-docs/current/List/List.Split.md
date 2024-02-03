---
title: List.Split
---

# List.Split


## Description

Rozdelí zadaný zoznam na zoznam zoznamov použitím zadanej veľkosti stránky.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Rozdelí <code>list</code> na zoznam zoznamov, kde prvým prvkom výstupného zoznamu je zoznam obsahujúci prvé prvky (<code>pageSize</code>) zo    zdrojového zoznamu. Ďalším prvkom vo výstupnom zozname je zoznam obsahujúci ďalšie prvky (<code>pageSize</code>) zo zdrojového zoznamu atď.



## Category
List.Transformation functions
