---
title: Cube.Dimensions
---

# Cube.Dimensions


## Description

Gibt eine Tabelle zurück, die den Satz verfügbarer Dimensionen enthält.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Details

Gibt eine Tabelle zurück, die den Satz verfügbarer Dimensionen innerhalb von '<code>cube</code>' enthält. Jede Dimension entspricht einer Tabelle, die einen Satz von Dimensionsattributen enthält, und jedes Dimensionsattribut wird als eine Spalte in der Dimensionstabelle dargestellt. Die Dimensionen können mithilfe von 'Cube.AddAndExpandDimensionColumn' im Cube erweitert werden. 



## Category
Cube
