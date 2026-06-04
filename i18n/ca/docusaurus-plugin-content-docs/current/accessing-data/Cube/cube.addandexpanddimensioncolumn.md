---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


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


## Remarks

Combina la taula de dimensions especificada, `dimensionSelector`, amb el context de filtre del `cube`, i canvia la granularitat dimensional del context del filtre expandint el conjunt especificat, `attributeNames`, dels atributs de la dimensió. Els atributs de la dimensió s'afegeixen a la vista tabular amb les columnes denominades `newColumnNames` o `attributeNames` si no s'especifica.



## Category
Cube
