---
title: List.Reverse
---

# List.Reverse


## Description

Tekee luettelon arvojen järjestyksestä käänteisen.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

Palauttaa luettelossa <code>list</code> olevien arvojen luettelon käänteisessä järjestyksessä.


## Examples

### Example #1 
Luo luettelo arvoista \{1..10} käänteisessä järjestyksessä.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
