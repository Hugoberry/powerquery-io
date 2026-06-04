---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


Mengembalikan jadual dengan lajur yang dipetakan kepada atribut entiti dalam Common Data Model, termasuk jenis data.


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

Mengembalikan jadual dengan lajur yang dipetakan kepada atribut entiti dalam Common Data Model, termasuk jenis data. Lajur daripada definisi entiti akan ditambah jika tidak dipetakan dan sebarang lajur yang tidak dipetakan akan dialih keluar.


