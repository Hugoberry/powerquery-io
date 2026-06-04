---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Lisää sarakkeen kuutioon, joka sisältää sen mittayksikön tulokset, jota on käytetty kunkin rivin rivikontekstissa.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Lisää sarakkeen nimeltä `column` kuutioon `cube`, joka sisältää sen mittayksikön `measureSelector` tulokset, jota on käytetty kunkin rivin rivikontekstissa. Dimension askelvälin ja leikkauksen muutokset vaikuttavat mittaussovellukseen. Mitta-arvoja säädetään tiettyjen kuutiotoimintojen suorituksen jälkeen.



## Category
Cube
