---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Vrne tabelo s stolpci, ki so preslikani v atribute entitete v modelu Common Data Model, vključno s podatkovnimi tipi.


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

Vrne tabelo s stolpci, ki so preslikani v atribute entitete v modelu Common Data Model, vključno s podatkovnimi tipi. Stolpci iz definicije entitete bodo dodani, če niso preslikani, morebitni nepreslikani stolpci pa bodo odstranjeni.


