---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Fügt dem Cube, der die Ergebnisse des Measures enthält, das im Zeilenkontext jeder einzelnen Zeile angewendet wurde, eine Spalte hinzu.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Fügt dem '<code>cube</code>', der die Ergebnisse des Measures '<code>measureSelector</code>' enthält, das im Zeilenkontext jeder einzelnen Zeile angewendet wurde, eine Spalte mit dem Namen '<code>column</code>' hinzu. Änderungen in Bezug auf die Dimensionsgranularität und die Slices wirken sich auf die Anwendung von Measures aus. Measurewerte werden angepasst, nachdem bestimmte Cubevorgänge ausgeführt wurden.



## Category
Cube
