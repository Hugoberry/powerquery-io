---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Returnerar en tabell med kolumner som har mappats till attribut för en entitet i Common Data Model, inklusive datatyper.


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

Returnerar en tabell med kolumner som har mappats till attribut för en entitet i Common Data Model, inklusive datatyper. Kolumner från entitetsdefinitionen läggs till om de inte mappas, och alla omappade kolumner tas bort.


