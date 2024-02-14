---
title: DataLake.Files
---

# DataLake.Files


Voer de URL van uw Azure Data Lake Storage-account in.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel geretourneerd die een rij bevat voor elk bestand dat wordt gevonden bij <code>url</code> vanuit Azure Data Lake Storage Gen1. Elke rij bevat de eigenschappen van het bestand, evenals een koppeling naar de bijbehorende inhoud.


