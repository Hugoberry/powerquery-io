---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

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


## Details

Vrne tabelo zbirk podatkov Azure Cosmos DB, ki so na naslovu <code>url</code>. Če določite <code>database</code>, bo namesto tega vrnjena tabela zbirk. Če pa v zapisu <code>options</code> določite polje <code>Query</code>, bodo vrnjeni rezultati poizvedbe, ki je bila zagnana v navedeni zbirki podatkov in/ali zbirki.


