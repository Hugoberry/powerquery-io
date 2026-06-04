---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Pridá stĺpec do kocky, ktorá obsahuje výsledky mierky použitej v kontexte každého riadka.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Pridá stĺpec s názvom `column` do kocky `cube`, ktorá obsahuje výsledky mierky `measureSelector` použitej v kontexte každého riadka. Použitie mierky je ovplyvnené zmenami v granularite a výsekoch dimenzie. Hodnoty mierky sa upravia po vykonaní určitých operácií kocky.



## Category
Cube
