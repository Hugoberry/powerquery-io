---
title: Parquet.Document
---

# Parquet.Document


Hiermee wordt de inhoud van het CSV-document geretourneerd als een tabel.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Remarks

Retourneert de inhoud van het Parquet-document als een tabel. Opties zijn onder andere:

-   `TypeMapping`: een tekstwaarde waarmee de standaardtypetoewijzing wordt bepaald bij het lezen en schrijven van bestanden. De standaardwaarde is null en probeert zo betrouwbaar mogelijk te blijven ten opzichte van het oorspronkelijke type. Met de waarde 'Sql' worden resultaten geproduceerd die het meest compatibel zijn met SQL Server.



## Category
Toegang tot gegevens
