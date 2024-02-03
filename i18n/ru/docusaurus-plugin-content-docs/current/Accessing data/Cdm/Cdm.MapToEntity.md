---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Возвращает таблицу со столбцами, сопоставленными с атрибутами сущности в Common Data Model, включая типы данных.


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

Возвращает таблицу со столбцами, сопоставленными с атрибутами сущности в Common Data Model, включая типы данных. Будут добавлены несопоставленные столбцы из определения сущности, а прочие несопоставленные столбцы будут удалены.


