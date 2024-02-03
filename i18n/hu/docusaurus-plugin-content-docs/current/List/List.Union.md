---
title: List.Union
---

# List.Union


## Description

A bemenetben található listaértékek unióját adja vissza.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Veszi a(z) <code>lists</code> listákból álló listát, az egyes listák elemeinek unióját képezi, és visszaadja azokat a kimeneti listán. Az eredményként visszaadott lista a bemeneti listák bármelyikén szereplő összes elemet tartalmazza.    Ez a művelet fenntartja a hagyományos zsák szemantikát, így az ismétlődő értékek egyeztetve lesznek az unió részeként.    Megadható egy nem kötelező <code>equationCriteria</code> egyenlőségi feltétel érték is az egyenlőségvizsgálat szabályozásához. 


## Examples

### Example #1 
Az \{1..5}, \{2..6}, \{3..7} lista uniójának létrehozása
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
