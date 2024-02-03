---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

Įveskite „Azure Cosmos DB“ paskyros URL.


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

Pateikiama „Azure Cosmos DB“ duomenų bazių, esančių <code>URL</code>, lentelė. Jei nurodyta <code>duomenų bazė</code>, bus pateikta rinkinių lentelė. Be to, jei laukas <code>Užklausa</code> nurodytas įraše <code>Parinktys</code>, bus pateikti užklausos, vykdomos nurodytoje duomenų bazėje ir (arba) rinkinyje, rezultatai.


