---
title: Cube.CollapseAndRemoveColumns
---

# Cube.CollapseAndRemoveColumns


## Description

Modifica la granularità dimensionale del contesto filtro del cubo comprimendo gli attributi per cui è stato eseguito il mapping alle colonne specificate.


## Syntax

```powerquery
Cube.CollapseAndRemoveColumns(
    cube as table,
    columnNames as list
) as table
```


## Details

Modifica la granularità dimensionale del contesto filtro dell'elemento <code>cube</code> comprimendo gli attributi per cui è stato eseguito il mapping alle colonne specificate <code>columnNames</code>. Le colonne vengono anche rimosse dalla visualizzazione tabulare del cubo.



## Category
Cube
