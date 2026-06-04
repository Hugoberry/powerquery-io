---
title: Binary.Split
---

# Binary.Split


Rozdělí zadaný binární soubor na seznam binárních souborů pomocí zadané velikosti stránky.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Rozdělí `binary` do seznamu binárních souborů, kde první prvek výstupního seznamu je binární soubor obsahující prvních `pageSize` bajtů z zdrojového binárního souboru, další prvek výstupního seznamu je binární soubor obsahující dalších `pageSize` bajtů ze zdrojového binárního souboru atd.



## Category
Binary
