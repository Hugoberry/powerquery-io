---
title: Hdfs.Files
---

# Hdfs.Files


## Description

Palauttaa taulukon, joka sisältää Hadoop-tiedostojärjestelmän määritetystä kansiosta ja määritetyistä alikansioista löytyneiden tiedostojen ominaisuudet sekä sisällöt.


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Details

Palauttaa taulukon, joka sisältää rivin kullekin Hadoop-tiedostojärjestelmän kansion URL-osoitteesta <code>url</code> ja alikansioista löytyvälle kansiolle ja tiedostolle. Kukin rivi sisältää tiedoston ominaisuudet ja linkin sen sisältöön.



## Category
Accessing data
