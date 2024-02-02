---
title: Cube.CollapseAndRemoveColumns
---

# Cube.CollapseAndRemoveColumns


## Description

Modifie la granularité dimensionnelle du contexte de filtre pour le cube en réduisant les attributs mappés aux colonnes spécifiées.


## Syntax

```powerquery
Cube.CollapseAndRemoveColumns(
    cube as table,
    columnNames as list
) as table
```


## Details

Modifie la granularité dimensionnelle du contexte de filtre pour le <code>cube</code> en réduisant les attributs mappés aux colonnes spécifiées <code>columnNames</code>. Les colonnes sont également supprimées de la vue tabulaire du cube.



## Category
Cube
