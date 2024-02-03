---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

Anna Azure Cosmos DB -tilin URL-osoite.


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

Palauttaa Azure Cosmos DB -tietokantojen taulukon kohteessa <code>url</code>. Jos <code>database</code> määritetään, palautetaan kokoelmien taulukko sen sijaan. Lisäksi jos kenttä <code>Query</code> on määritetty <code>options</code>-tietueessa, palautetaan määritetylle tietokannalle ja/tai kokoelmalle suoritettavan kyselyn tulokset.


