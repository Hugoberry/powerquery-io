---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


Hiermee wordt een tabel geretourneerd met kolommen die zijn toegewezen aan de kenmerken van een entiteit in Common Data Model, waaronder gegevenstypen.


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

Hiermee wordt een tabel geretourneerd met kolommen die zijn toegewezen aan de kenmerken van een entiteit in Common Data Model, waaronder gegevenstypen. Kolommen uit de entiteitsdefinitie worden toegevoegd als deze niet zijn toegewezen en niet-toegewezen kolommen worden verwijderd.


