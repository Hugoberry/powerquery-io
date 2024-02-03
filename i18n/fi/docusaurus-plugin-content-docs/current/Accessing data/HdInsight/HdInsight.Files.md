---
title: HdInsight.Files
---

# HdInsight.Files


## Description

Palauttaa taulukon, joka sisältää Azure-tallennustilasäilön määritetystä säilöstä löytyneiden blob-objektien ominaisuudet ja sisällön.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Details

Palauttaa taulukon, joka sisältää rivin kullekin säilön URL-osoitteesta <code>account</code> löytyneelle blob-tiedostolle Azure-tallennustilasäilöstä. Kukin rivi sisältää tiedoston ominaisuudet ja linkin sen sisältöön.



## Category
Accessing data
