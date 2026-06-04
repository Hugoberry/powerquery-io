---
title: DocumentDB.Contents
---

# DocumentDB.Contents


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


## Remarks

Palauttaa Azure Cosmos DB -tietokantojen taulukon kohteessa `url`. Jos `database` määritetään, palautetaan kokoelmien taulukko sen sijaan. Lisäksi jos kenttä `Query` on määritetty `options`\-tietueessa, palautetaan määritetylle tietokannalle ja/tai kokoelmalle suoritettavan kyselyn tulokset.


