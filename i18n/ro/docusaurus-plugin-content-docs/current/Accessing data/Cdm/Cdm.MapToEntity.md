---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Returnează un tabel cu coloane mapate la atributele unei entități din Common Data Model, inclusiv tipurile de date.


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

Returnează un tabel cu coloane mapate la atributele unei entități din Common Data Model, inclusiv tipurile de date. Coloanele din definiția entității vor fi adăugate dacă nu sunt mapate și toate coloanele nemapate vor fi eliminate.


