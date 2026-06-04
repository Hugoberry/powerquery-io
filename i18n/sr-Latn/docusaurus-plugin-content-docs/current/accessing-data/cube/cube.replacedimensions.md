---
title: Cube.ReplaceDimensions
---

# Cube.ReplaceDimensions


Zamenjuje skup dimenzija koje je vratila funkcija Cube.Dimensions.


## Syntax

```powerquery
Cube.ReplaceDimensions(
    cube as table,
    dimensions as any
) as table
```


## Remarks

Zamena skupa dimenzija koje vraća `Cube.Dimensions`. Na primer, ova funkcija može da se koristi za dodavanje ID kolone atributu dimenzije kako bi izvor podataka mogao da se grupiše na ID-u, a ne na prikazanoj vrednosti.



## Category
Cube
