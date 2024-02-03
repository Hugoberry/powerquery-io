---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Zwraca tabelę z kolumnami zamapowanymi na atrybuty jednostki w modelu Common Data Model, w tym typy danych.


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

Zwraca tabelę z kolumnami zamapowanymi na atrybuty jednostki w modelu Common Data Model, w tym typy danych. Kolumny z definicji jednostki, jeśli nie będą zamapowane, zostaną dodane, a wszystkie niezamapowane kolumny zostaną usunięte.


