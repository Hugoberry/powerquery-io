---
title: List.Split
---

# List.Split


## Description

Permet dividir la llista especificada en una llista de llistes mitjançant la mida de pàgina especificada.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Permet dividir <code>list</code> en una llista de llistes en què el primer element de la llista de sortida és una llista que conté els primers <code>pageSize</code> elements de    la llista de fonts; el següent element de la llista de sortida és una llista que conté els propers <code>pageSize</code> de la llista de fonts, etc.



## Category
List.Transformation functions
