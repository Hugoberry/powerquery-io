---
title: Cube.Dimensions
---

# Cube.Dimensions


## Description

Vráti tabuľku obsahujúcu množinu dostupných dimenzií.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Details

Vráti tabuľku obsahujúcu množinu dostupných dimenzií v rámci kocky <code>cube</code>. Každá dimenzia je tabuľka obsahujúca množinu atribútov dimenzií a každý atribút dimenzie je znázornený ako stĺpec v tabuľke dimenzií. Dimenzie možno v kocke rozbaliť pomocou funkcie Cube.AddAndExpandDimensionColumn. 



## Category
Cube
