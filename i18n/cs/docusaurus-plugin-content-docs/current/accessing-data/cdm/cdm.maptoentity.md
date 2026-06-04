---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


Vrátí tabulku se sloupci namapovanými na atributy entity v modelu Common Data Model, včetně datových typů.


## Syntax

```powerquery
Cdm.MapToEntity(
    table as table,
    columnDefinitions as any,
    optional defaultType as type,
    optional defaultCdmClass as text
) as table
```


## Remarks

Vrátí tabulku se sloupci namapovanými na atributy entity v modelu Common Data Model, včetně datových typů. Pokud se mapování neprovede, přidají se sloupce z definice entity a všechny nenamapované sloupce se odeberou.


