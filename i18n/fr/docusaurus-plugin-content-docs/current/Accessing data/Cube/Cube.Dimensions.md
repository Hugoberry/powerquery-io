---
title: Cube.Dimensions
---

# Cube.Dimensions


## Description

Retourne une table contenant l&#39;ensemble des dimensions disponibles.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Details

Retourne une table contenant l'ensemble des dimensions disponibles dans le <code>cube</code>. Chaque dimension est une table contenant un ensemble d'attributs de dimension et chaque attribut de dimension est représenté sous forme de colonne dans la table de dimension. Les dimensions peuvent être développées dans le cube à l'aide de Cube.AddAndExpandDimensionColumn. 



## Category
Cube
