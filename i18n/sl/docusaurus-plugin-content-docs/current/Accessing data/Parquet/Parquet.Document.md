---
title: Parquet.Document
---

# Parquet.Document


## Description

Vrne vsebino dokumenta Parquet v obliki tabele.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Vrne vsebino dokumenta Parquet kot tabelo. Možnosti vključujejo:
    <ul>
    <li> <code>TypeMapping</code>: besedilna vrednost, ki nadzoruje privzeto preslikavo vrste med branjem in pisanjem datotek. Privzeta vrednost je "null" in poskuša ohraniti čim več ločljivosti izvirne vrste. Rezultat vrednosti "Sql" bo najbolj združljiv s strežnikom SQL Server.</li>
    </ul>



## Category
Dostop do podatkov
