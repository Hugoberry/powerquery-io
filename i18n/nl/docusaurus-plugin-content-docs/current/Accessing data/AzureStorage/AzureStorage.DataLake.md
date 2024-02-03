---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Hiermee wordt een navigeerbare tabel geretourneerd met de documenten die zijn gevonden in de opgegeven container en de bijbehorende submappen in Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Hiermee wordt een navigeerbare tabel met de documenten die zijn gevonden in de opgegeven container en de bijbehorende submappen op de account-URL <code>endpoint</code>, geretourneerd uit een Azure Data Lake Storage-bestandssysteem. <code>options</code> kan worden opgegeven om de volgende opties te bepalen:    <ul><li><code>BlockSize</code> : Het aantal bytes dat moet worden gelezen voordat er op de gegevensverbruiker wordt gewacht. De standaardwaarde is 4 MB.</li><li><code>RequestSize</code> : Het aantal bytes dat moet worden gelezen in &#233;&#233;n HTTP-aanvraag bij de server. De standaardwaarde is 4 MB.</li><li><code>ConcurrentRequests</code> : De optie ConcurrentRequests ondersteunt het sneller downloaden van gegevens via het opgeven van het aantal aanvragen dat parallel moet worden uitgevoerd, ten koste van het geheugengebruik. Het vereiste geheugen is (ConcurrentRequest \* RequestSize). De standaardwaarde is 16.</li><li><code>HierarchicalNavigation</code> : Een logische waarde (true/false) waarmee wordt bepaald of de bestanden worden geretourneerd als een structuurmapweergave of als een platte lijst. De standaardwaarde is false.</li></ul>



## Category
Accessing data
