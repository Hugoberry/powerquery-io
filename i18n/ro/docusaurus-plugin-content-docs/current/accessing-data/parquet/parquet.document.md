---
title: Parquet.Document
---

# Parquet.Document


Returnează conținutul documentului Parquet ca tabel.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Remarks

Returnează conținutul documentului Parquet ca tabel. Printre opțiuni se numără:

-   `TypeMapping`: o valoare text care controlează maparea tipului implicit la citirea și scrierea fișierelor. Valoarea implicită este nulă și încearcă să păstreze cât mai multă fidelitate față de tipul original. O valoare „Sql” va produce rezultatele cele mai compatibile cu Sql Server.



## Category
Se accesează datele
