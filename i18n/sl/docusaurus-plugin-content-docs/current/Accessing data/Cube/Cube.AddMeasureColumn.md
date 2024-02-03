---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Kocki doda stolpec z rezultati meritve, uporabljene v kontekstu vrstice za vsako vrstico.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

<code>cube</code> doda stolpec z imenom <code>column</code> z rezultati meritve (<code>measureSelector</code>), uporabljene v kontekstu vrstice za vsako vrstico. Na uporabo meritve vplivajo spremembe dimenzionalne granularnosti in uporaba rezin. Vrednosti meritve bodo prilagojene po izvedbi določenih postopkov kocke.



## Category
Cube
