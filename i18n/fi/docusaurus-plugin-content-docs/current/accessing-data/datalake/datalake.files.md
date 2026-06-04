---
title: DataLake.Files
---

# DataLake.Files


Anna Azure Data Lake Storage -tilisi URL-osoite.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Palauttaa Azure Data Lake Storage Gen1:stä taulukon, joka sisältää rivin kullekin tiedostolle, jotka löytyvät `URL`\-osoitteesta. Kukin rivi sisältää tiedoston ominaisuudet ja linkin sen sisältöön.


