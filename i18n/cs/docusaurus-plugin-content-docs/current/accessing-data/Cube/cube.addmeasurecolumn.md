---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Přidá do datové krychle sloupec obsahující výsledky míry použité v kontextu řádku na každém řádku.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Přidá do datové krychle `cube` sloupec s názvem `column` obsahující výsledky míry `measureSelector` použité v kontextu řádku na každém řádku. Měření je ovlivněno změnami členitosti a řezů dimenze. Hodnoty měření budou upraveny po provedení určitých operací datové krychle.



## Category
Cube
