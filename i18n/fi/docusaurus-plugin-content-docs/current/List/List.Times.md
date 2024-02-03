---
title: List.Times
---

# List.Times


## Description

Muodostaa luettelon time-arvoista, kun annetaan alkuarvo, määrä ja lisäävä keston arvo.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

Palauttaa luettelon <code>time</code>-arvoista. Koko on <code>count</code> ja alkukohta <code>start</code>. Annettu lisäys <code>step</code> on <code>duration</code>-arvo, joka lisätään jokaiseen arvoon.


## Examples

### Example #1 
Luo neljästä arvosta muodostuva luettelo, joka alkaa keskipäivästä (#time(12, 0, 0)) ja käyttää yhden tunnin lisäystä (#duration(0, 1, 0, 0)).
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
