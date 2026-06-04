---
title: Parquet.Document
---

# Parquet.Document


Vrátí obsah dokumentu Parquet jako tabulku.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Remarks

Vrátí obsah dokumentu Parquet jako tabulku. Mezi možnosti patří:

-   `TypeMapping`: Textová hodnota, která řídí výchozí mapování typů při čtení a zápisu souborů. Výchozí hodnota je null a pokusí se zachovat co nejvíce věrnosti původního typu. Hodnota „Sql“ vytvoří výsledky, které jsou nejvíce kompatibilní se SQL Serverem.



## Category
Přístup k datům
