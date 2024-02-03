---
title: Parquet.Document
---

# Parquet.Document


## Description

Vráti obsah dokumentu vo formáte Parquet ako tabuľku.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Vráti obsah dokumentu Parquet ako tabuľku. Možnosti zahŕňajú:    <ul>    <li> <code>TypeMapping</code>: Textová hodnota, ktorá ovláda predvolené mapovanie typov pri čítaní a zápise súborov. Predvolená hodnota je null a pokúsi sa zachovať čo najviac vernosti pôvodnému typu. Hodnota Sql vytvorí výsledky, ktoré sú najviac kompatibilné s SQL Serverom.</li>    </ul>



## Category
Pristupuje sa k údajom
