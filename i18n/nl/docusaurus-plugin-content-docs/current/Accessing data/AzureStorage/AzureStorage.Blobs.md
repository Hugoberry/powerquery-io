---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Retourneert een navigeerbare tabel die de containers bevat die in het opgegeven account van een Azure-opslagkluis zijn te vinden.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Hiermee wordt een navigeerbare tabel met een rij voor elke container die is gevonden op de account-URL <code>account</code>, geretourneerd uit een Azure-opslagkluis. Elke rij bevat een koppeling naar de containerblobs. <code>options</code> kan worden opgegeven om de volgende opties te bepalen:    <ul><li><code>BlockSize</code> : Het aantal bytes dat moet worden gelezen voordat er op de gegevensverbruiker wordt gewacht. De standaardwaarde is 4 MB.</li><li><code>RequestSize</code> : Het aantal bytes dat moet worden gelezen in &#233;&#233;n HTTP-aanvraag bij de server. De standaardwaarde is 4 MB.</li><li><code>ConcurrentRequests</code> : De optie ConcurrentRequests ondersteunt het sneller downloaden van gegevens via het opgeven van het aantal aanvragen dat parallel moet worden uitgevoerd, ten koste van het geheugengebruik. Het vereiste geheugen is (ConcurrentRequest \* RequestSize). De standaardwaarde is 16.</li></ul>



## Category
Accessing data
