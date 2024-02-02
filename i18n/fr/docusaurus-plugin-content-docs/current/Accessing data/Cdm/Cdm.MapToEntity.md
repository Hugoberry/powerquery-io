---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Retourne une table avec des colonnes mappées aux attributs d&#39;une entité dans Common Data Model, notamment les types de données.


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

Retourne une table avec des colonnes mappées aux attributs d'une entité dans Common Data Model, notamment les types de données. Les colonnes de la définition d'entité sont ajoutées si elles ne sont pas mappées et toutes les colonnes non mappées sont supprimées.


