---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Menghasilkan tabel dengan kolom yang dipetakan ke atribut entitas dalam Common Data Model, termasuk jenis data.


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

Menghasilkan tabel dengan kolom yang dipetakan ke atribut entitas dalam Common Data Model, termasuk jenis data. Kolom dari definisi entitas akan ditambahkan jika tidak dipetakan, dan kolom yang belum dipetakan akan dihapus.


