---
title: List.Repeat
---

# List.Repeat


## Description

Palauttaa luettelon, joka on alkuperäisen luettelon määritetty määrä toistoja.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

Palauttaa luettelon, joka on <code>count</code> toistoa alkuperäisestä luettelosta <code>list</code>.


## Examples

### Example #1 
Luo luettelo, jossa \{1, 2} toistuu kolme kertaa.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
