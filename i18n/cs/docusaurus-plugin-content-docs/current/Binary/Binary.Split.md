---
title: Binary.Split
---

# Binary.Split


## Description

Rozdělí zadaný binární soubor na seznam binárních souborů pomocí zadané velikosti stránky.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Rozdělí <code>binary</code> do seznamu binárních souborů, kde první prvek výstupního seznamu je binární soubor obsahující prvních <code>pageSize</code> bajtů z zdrojového binárního souboru, další prvek výstupního seznamu je binární soubor obsahující dalších <code>pageSize</code> bajtů ze zdrojového binárního souboru atd.



## Category
Binary
