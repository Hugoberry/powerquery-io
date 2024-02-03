---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

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


## Details

Yhdistää määritetyn dimensiotaulukon <code>dimensionSelector</code> kuution <code>cube</code> suodatinkontekstiin ja muuttaa suodatinkontekstin dimension askelväliä laajentamalla määritettyä dimensiomääritejoukkoa <code>attributeNames</code>. Dimensiomääritteet lisätään taulukkonäkymän sarakkeisiin nimeltä <code>newColumnNames</code> tai <code>attributeNames</code>, jos saraketta ei ole määritetty.



## Category
Cube
