---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Gibt eine Tabelle mit Spalten zurück, die den Attributen einer Entität im Common Data Model (einschließlich Datentypen) zugeordnet sind.


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

Gibt eine Tabelle mit Spalten zurück, die den Attributen einer Entität im Common Data Model (einschließlich Datentypen) zugeordnet sind. Spalten aus der Entitätsdefinition werden hinzugefügt, falls sie nicht zugeordnet sind, und alle nicht zugeordneten Spalten werden entfernt.


