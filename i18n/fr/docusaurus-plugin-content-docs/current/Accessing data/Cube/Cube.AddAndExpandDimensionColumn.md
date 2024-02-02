---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Fusionne la table de dimensions spécifiée dans le contexte de filtre du cube et modifie la granularité dimensionnelle du contexte de filtre en développant le jeu d&#39;attributs de dimension spécifié.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Details

Fusionne la table de dimensions spécifiée, <code>dimensionSelector</code>, dans le contexte de filtre du cube, <code>cube</code>, et modifie la granularité dimensionnelle du contexte de filtre en développant le jeu d'attributs de dimension spécifié, <code>attributeNames</code>. Les attributs de dimension sont ajoutés à la vue tabulaire avec des colonnes nommées <code>newColumnNames</code>, ou <code>attributeNames</code> si non spécifié.



## Category
Cube
