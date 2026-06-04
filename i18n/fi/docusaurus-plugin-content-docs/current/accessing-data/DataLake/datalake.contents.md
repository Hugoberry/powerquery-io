---
title: DataLake.Contents
---

# DataLake.Contents


Anna Azure Data Lake Storage Gen1 -tilisi URL-osoite.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Palauttaa Azure Data Lake Storage Gen1:stä taulukon, joka sisältää rivin kullekin kansiolle ja tiedostolle, jotka löytyvät `URL`\-osoitteesta. Kukin rivi sisältää kansion tai tiedoston ominaisuudet ja linkin sen sisältöön.


