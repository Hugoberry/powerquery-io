---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Vnesite URL računa za Azure Cosmos DB.


## Syntax

```powerquery
DocumentDB.Contents(
    url as text,
    optional database as text,
    optional collection as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo zbirk podatkov Azure Cosmos DB, ki so na naslovu `url`. Če določite `database`, bo namesto tega vrnjena tabela zbirk. Če pa v zapisu `options` določite polje `Query`, bodo vrnjeni rezultati poizvedbe, ki je bila zagnana v navedeni zbirki podatkov in/ali zbirki.


