---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Egy olyan táblázatot ad vissza, amelynek oszlopai egy, a Common Data Modelben lévő entitás attribútumaihoz vannak hozzárendelve, beleértve az adattípusokat is.


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

Egy olyan táblázatot ad vissza, amelynek oszlopai egy, a Common Data Modelben lévő entitás attribútumaihoz vannak hozzárendelve, beleértve az adattípusokat is. A rendszer hozzáadja az entitásdefiníció oszlopait, ha azok nincsenek hozzárendelve, és minden nem hozzárendelt oszlopot eltávolít.


