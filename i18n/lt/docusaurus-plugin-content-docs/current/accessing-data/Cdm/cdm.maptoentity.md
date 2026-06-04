---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


Pateikiama lentelė su stulpeliais, susietais su objekto „Common Data Model“ atributais, įskaitant duomenų tipus.


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

Pateikiama lentelė su stulpeliais, susietais su objekto „Common Data Model“ atributais, įskaitant duomenų tipus. Stulpeliai iš objekto apibrėžties bus pridėti, jei nebus susieti, ir visi nesusieti stulpeliai bus pašalinti.


