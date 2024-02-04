---
title: List.Split
---

# List.Split


## Description

Unterteilt die angegebene Liste anhand der angegebenen Seitengröße in eine Liste von Listen.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Unterteilt <code>list</code> in eine Liste von Listen. Hierbei ist das erste Element der Ausgabeliste eine Liste, die die ersten <code>pageSize</code> Elemente aus    der Quellliste enthält. Das nächste Element der Ausgabeliste ist eine Liste mit den nächsten <code>pageSize</code> Elementen aus der Quellliste usw..



## Category
List.Transformation functions
