---
title: HdInsight.Containers
---

# HdInsight.Containers


Palauttaa siirtymistaulukon, joka sisältää Azure-tallennustilasäilön määritetyltä tililtä löytyneet säilöt.


## Syntax

```powerquery
HdInsight.Containers(
    account as text
) as table
```


## Remarks

Palauttaa siirtymistaulukon, joka sisältää rivin kullekin Azure-tallennustilasäilön tilin URL-osoitteesta `account` löytyneelle säilölle. Kukin rivi sisältää linkin säilön blob-objekteihin.



## Category
Accessing data
