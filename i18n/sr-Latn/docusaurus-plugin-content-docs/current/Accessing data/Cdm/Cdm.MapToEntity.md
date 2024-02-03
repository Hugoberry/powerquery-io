---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Returns a table with columns mapped to the attributes of an entity in the Common Data Model, including data types.


## Syntax

```powerquery
Cdm.MapToEntity(
    table as table,
    columnDefinitions as any,
    optional defaultType as type,
    optional defaultCdmClass as text
) as table
```


## Details

Returns a table with columns mapped to the attributes of an entity in the Common Data Model, including data types. Columns from the entity definition will be added if not mapped, and any unmapped columns will be removed.


