---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Hiermee wordt een navigeerbare tabel geretourneerd met de documenten die zijn gevonden in de opgegeven container en de bijbehorende submappen in Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een navigeerbare tabel met de documenten die zijn gevonden in de opgegeven container en de bijbehorende submappen op de account-URL `endpoint`, geretourneerd uit een Azure Data Lake Storage-bestandssysteem. `options` kan worden opgegeven om de volgende opties te bepalen:

-   `BlockSize` : Het aantal bytes dat moet worden gelezen voordat er op de gegevensverbruiker wordt gewacht. De standaardwaarde is 4 MB.
-   `RequestSize` : Het aantal bytes dat moet worden gelezen in één HTTP-aanvraag bij de server. De standaardwaarde is 4 MB.
-   `ConcurrentRequests` : De optie ConcurrentRequests ondersteunt het sneller downloaden van gegevens via het opgeven van het aantal aanvragen dat parallel moet worden uitgevoerd, ten koste van het geheugengebruik. Het vereiste geheugen is (ConcurrentRequest \* RequestSize). De standaardwaarde is 16.
-   `HierarchicalNavigation` : Een logische waarde (true/false) waarmee wordt bepaald of de bestanden worden geretourneerd als een structuurmapweergave of als een platte lijst. De standaardwaarde is false.



## Category
Accessing data
