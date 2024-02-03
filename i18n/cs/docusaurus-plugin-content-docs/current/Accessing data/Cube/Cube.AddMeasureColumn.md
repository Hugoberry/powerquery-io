---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Přidá do datové krychle sloupec obsahující výsledky míry použité v kontextu řádku na každém řádku.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Přidá do datové krychle <code>cube</code> sloupec s názvem <code>column</code> obsahující výsledky míry <code>measureSelector</code> použité v kontextu řádku na každém řádku. Měření je ovlivněno změnami členitosti a řezů dimenze. Hodnoty měření budou upraveny po provedení určitých operací datové krychle.



## Category
Cube
