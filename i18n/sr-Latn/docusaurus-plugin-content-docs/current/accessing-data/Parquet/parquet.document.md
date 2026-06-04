---
title: Parquet.Document
---

# Parquet.Document


Vraća sadržaj Parquet dokumenta u vidu tabele.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Remarks

Vraća sadržaj Parquet dokumenta kao tabelu. Opcije uključuju:

-   `Mapiranje tipa` : Tekstualna vrednost koja kontroliše podrazumevano mapiranje tipa tokom čitanja i upisivanja datoteka. Podrazumevana vrednost je „Null“ i pokušava da sačuva što veću tačnost originalnog tipa. Vrednost „SQL“ će dati rezultate koji su najprikladniji sa sistemom SQL Server.



## Category
Pristup podacima
