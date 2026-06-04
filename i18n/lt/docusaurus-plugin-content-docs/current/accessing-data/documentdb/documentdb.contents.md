---
title: DocumentDB.Contents
---

# DocumentDB.Contents


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


## Remarks

Pateikiama „Azure Cosmos DB“ duomenų bazių, esančių `URL`, lentelė. Jei nurodyta `duomenų bazė`, bus pateikta rinkinių lentelė. Be to, jei laukas `Užklausa` nurodytas įraše `Parinktys`, bus pateikti užklausos, vykdomos nurodytoje duomenų bazėje ir (arba) rinkinyje, rezultatai.


