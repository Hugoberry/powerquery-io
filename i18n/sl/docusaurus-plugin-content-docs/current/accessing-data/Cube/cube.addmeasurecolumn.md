---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Kocki doda stolpec z rezultati meritve, uporabljene v kontekstu vrstice za vsako vrstico.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

`cube` doda stolpec z imenom `column` z rezultati meritve (`measureSelector`), uporabljene v kontekstu vrstice za vsako vrstico. Na uporabo meritve vplivajo spremembe dimenzionalne granularnosti in uporaba rezin. Vrednosti meritve bodo prilagojene po izvedbi določenih postopkov kocke.



## Category
Cube
