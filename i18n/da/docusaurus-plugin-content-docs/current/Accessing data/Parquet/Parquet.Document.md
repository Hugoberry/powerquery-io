---
title: Parquet.Document
---

# Parquet.Document


Returnerer indholdet af Parquet-dokumentet som en tabel.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Remarks

Returnerer indholdet af Parquet-dokumentet som en tabel. Indstillingerne omfatter:    <ul>    <li> <code>TypeMapping</code> : En tekstværdi, der styrer standardtype-tilknytningen, når du læser og skriver filer. Standardværdien er null og forsøger at bevare så meget pålidelighed som muligt for den oprindelige type. Værdien "Sql" giver de resultater, der er mest kompatible med Sql Server.</li>    </ul>



## Category
Tilgår data
