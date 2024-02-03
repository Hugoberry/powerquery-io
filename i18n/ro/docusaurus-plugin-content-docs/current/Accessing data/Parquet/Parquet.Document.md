---
title: Parquet.Document
---

# Parquet.Document


## Description

Returnează conținutul documentului Parquet ca tabel.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Returnează conținutul documentului Parquet ca tabel. Printre opțiuni se numără:
    <ul>
    <li> <code>TypeMapping</code>: o valoare text care controlează maparea tipului implicit la citirea și scrierea fișierelor. Valoarea implicită este nulă și încearcă să păstreze cât mai multă fidelitate față de tipul original. O valoare „Sql” va produce rezultatele cele mai compatibile cu Sql Server.</li>
    </ul>



## Category
Se accesează datele
