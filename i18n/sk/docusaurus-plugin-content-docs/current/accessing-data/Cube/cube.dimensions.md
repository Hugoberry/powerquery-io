---
title: Cube.Dimensions
---

# Cube.Dimensions


Vráti tabuľku obsahujúcu množinu dostupných dimenzií.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Remarks

Vráti tabuľku obsahujúcu množinu dostupných dimenzií v rámci kocky `cube`. Každá dimenzia je tabuľka obsahujúca množinu atribútov dimenzií a každý atribút dimenzie je znázornený ako stĺpec v tabuľke dimenzií. Dimenzie možno v kocke rozbaliť pomocou funkcie Cube.AddAndExpandDimensionColumn.



## Category
Cube
