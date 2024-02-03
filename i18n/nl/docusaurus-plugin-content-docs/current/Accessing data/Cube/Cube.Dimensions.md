---
title: Cube.Dimensions
---

# Cube.Dimensions


## Description

Retourneert een tabel die de set beschikbare dimensies bevat.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Details

Retourneert een tabel die de set beschikbare dimensies binnen de <code>cube</code> bevat. Elke dimensie is een tabel die een set dimensiekenmerken bevat en elk dimensiekenmerk wordt voorgesteld als een kolom in de dimensietabel. In de kubus kunnen dimensies worden uitgevouwen met Cube.AddAndExpandDimensionColumn. 



## Category
Cube
