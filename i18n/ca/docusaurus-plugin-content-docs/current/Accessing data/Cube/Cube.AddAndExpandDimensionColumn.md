---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Combina la taula de dimensions especificada amb el context de filtre del cub i canvia la granularitat dimensional del context del filtre expandint el conjunt especificat dels atributs de la dimensió.


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

Combina la taula de dimensions especificada, <code>dimensionSelector</code>, amb el context de filtre del cub, <code>cube</code>, i canvia la granularitat dimensional del context del filtre expandint el conjunt especificat, <code>attributeNames</code>, dels atributs de la dimensió. Els atributs de la dimensió s'afegeixen a la vista tabular amb les columnes denominades <code>newColumnNames</code> o <code>attributeNames</code> si no s'especifica.



## Category
Cube
