---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Yhdistää määritetyn dimensiotaulukon kuution suodatinkontekstiin ja muuttaa suodatinkontekstin dimension askelväliä laajentamalla määritettyä dimensiomääritejoukkoa.


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

Yhdistää määritetyn dimensiotaulukon, `dimensionSelector`, kohteen `cube` suodatinkontekstiin ja muuttaa suodatinkontekstin dimension askelväliä laajentamalla määritettyä dimensiomääritejoukkoa `attributeNames`. Dimensiomääritteet lisätään taulukkonäkymän sarakkeisiin nimeltä `newColumnNames` tai `attributeNames`, jos saraketta ei ole määritetty.



## Category
Cube
