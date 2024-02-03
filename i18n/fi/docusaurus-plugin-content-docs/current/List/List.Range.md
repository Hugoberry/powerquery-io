---
title: List.Range
---

# List.Range


## Description

Palauttaa luettelon alijoukon siirtymästä alkaen.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

Palauttaa luettelon alijoukon siirtymästä <code>list</code> alkaen. Valinnainen parametri <code>offset</code> asettaa alijoukon kohteiden enimmäismäärän.


## Examples

### Example #1 
Selvitä lukujen 1–10 luettelon siirtymästä 6 alkava alijoukko.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Selvitä lukujen 1–10 luettelon siirtymästä 6 alkava alijoukon, jonka pituus on 2.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
