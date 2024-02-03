---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Pridá stĺpec do kocky, ktorá obsahuje výsledky mierky použitej v kontexte každého riadka.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Pridá stĺpec s názvom <code>column</code> do kocky <code>cube</code>, ktorá obsahuje výsledky mierky <code>measureSelector</code> použitej v kontexte každého riadka. Použitie mierky je ovplyvnené zmenami v granularite a výsekoch dimenzie. Hodnoty mierky sa upravia po vykonaní určitých operácií kocky.



## Category
Cube
