---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Hiermee wordt de inhoud van het opgegeven bestand geretourneerd uit een Azure Data Lake Storage-bestandssysteem.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Hiermee wordt de inhoud van het bestand op de URL `url` geretourneerd uit een Azure Data Lake Storage-bestandssysteem. `options` kan worden opgegeven om de volgende opties te bepalen:

-   `BlockSize` : Het aantal bytes dat moet worden gelezen voordat er op de gegevensverbruiker wordt gewacht. De standaardwaarde is 4 MB.
-   `RequestSize` : Het aantal bytes dat moet worden gelezen in één HTTP-aanvraag bij de server. De standaardwaarde is 4 MB.
-   `ConcurrentRequests` : De optie ConcurrentRequests ondersteunt het sneller downloaden van gegevens via het opgeven van het aantal aanvragen dat parallel moet worden uitgevoerd, ten koste van het geheugengebruik. Het vereiste geheugen is (ConcurrentRequest \* RequestSize). De standaardwaarde is 16.



## Category
Accessing data
