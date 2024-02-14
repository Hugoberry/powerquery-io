---
title: DataLake.Contents
---

# DataLake.Contents


De URL van uw Azure Data Lake Storage Gen1-account invoeren.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel geretourneerd die een rij bevat voor alle mappen en bestanden die worden gevonden bij <code>url</code> vanuit Azure Data Lake Storage Gen1. Elke rij bevat de eigenschappen van de map of het bestand, evenals een koppeling naar de bijbehorende inhoud.


