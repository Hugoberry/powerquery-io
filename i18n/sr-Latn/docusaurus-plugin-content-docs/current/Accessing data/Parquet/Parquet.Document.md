---
title: Parquet.Document
---

# Parquet.Document


## Description

Vraća sadržaj Parquet dokumenta u vidu tabele.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Vraća sadržaj Parquet dokumenta kao tabelu. Opcije uključuju:    <ul>    <li> <code>Mapiranje tipa</code> : Tekstualna vrednost koja kontroliše podrazumevano mapiranje tipa tokom čitanja i upisivanja datoteka. Podrazumevana vrednost je „Null“ i pokušava da sačuva što veću tačnost originalnog tipa. Vrednost „SQL“ će dati rezultate koji su najprikladniji sa sistemom SQL Server.</li>    </ul>



## Category
Pristup podacima
