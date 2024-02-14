---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


Devuelve una tabla con columnas asignadas a los atributos de una entidad en Common Data Model, incluidos los tipos de datos.


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

Devuelve una tabla con columnas asignadas a los atributos de una entidad en Common Data Model, incluidos los tipos de datos. Se agregarán las columnas de la definición de la entidad si no se asignan, y se quitarán todas las comunas no asignadas.


