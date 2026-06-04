---
title: List.Split
---

# List.Split


Permet dividir la llista especificada en una llista de llistes mitjançant la mida de pàgina especificada.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Permet dividir `list` en una llista de llistes en què el primer element de la llista de sortida és una llista que conté els primers `pageSize` elements de la llista de fonts; el següent element de la llista de sortida és una llista que conté els propers `pageSize` de la llista de fonts, etc.



## Category
List.Transformation functions
