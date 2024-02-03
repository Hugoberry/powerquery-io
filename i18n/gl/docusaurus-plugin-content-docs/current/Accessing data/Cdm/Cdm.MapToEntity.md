---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Devolve unha táboa coas columnas asignadas para os atributos dunha entidade en Common Data Model, incluídos os tipos de datos.


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

Devolve unha táboa coas columnas asignadas para os atributos dunha entidade en Common Data Model, incluídos os tipos de datos. As columnas da definición de entidade engadiranse se non están asignadas e todas as columnas sen asignar eliminaranse.


