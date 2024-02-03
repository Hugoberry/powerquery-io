---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


## Description

Hiermee wordt de inhoud van het opgegeven bestand geretourneerd uit een Azure Data Lake Storage-bestandssysteem.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Details

Hiermee wordt de inhoud van het bestand op de URL <code>url</code> geretourneerd uit een Azure Data Lake Storage-bestandssysteem. <code>options</code> kan worden opgegeven om de volgende opties te bepalen:    <ul><li><code>BlockSize</code> : Het aantal bytes dat moet worden gelezen voordat er op de gegevensverbruiker wordt gewacht. De standaardwaarde is 4 MB.</li><li><code>RequestSize</code> : Het aantal bytes dat moet worden gelezen in &#233;&#233;n HTTP-aanvraag bij de server. De standaardwaarde is 4 MB.</li><li><code>ConcurrentRequests</code> : De optie ConcurrentRequests ondersteunt het sneller downloaden van gegevens via het opgeven van het aantal aanvragen dat parallel moet worden uitgevoerd, ten koste van het geheugengebruik. Het vereiste geheugen is (ConcurrentRequest \* RequestSize). De standaardwaarde is 16.</li></ul>



## Category
Accessing data
