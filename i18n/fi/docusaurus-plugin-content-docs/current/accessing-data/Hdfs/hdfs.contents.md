---
title: Hdfs.Contents
---

# Hdfs.Contents


Palauttaa taulukon, joka sisältää Hadoop-tiedostojärjestelmän määritetystä kansiosta löytyneiden tiedostojen ja kansioiden ominaisuudet sekä sisällöt.


## Syntax

```powerquery
Hdfs.Contents(
    url as text
) as table
```


## Remarks

Palauttaa taulukon, joka sisältää rivin kullekin Hadoop-tiedostojärjestelmän kansion URL-osoitteesta `url` löytyvälle kansiolle ja tiedostolle. Kukin rivi sisältää kansion tai tiedoston ominaisuudet ja linkin sen sisältöön.



## Category
Accessing data
