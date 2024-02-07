---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Dit retourneert de inhoud van de opgegeven blob van een Azure-opslagkluis.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Hiermee wordt de inhoud van de blob op de URL <code>url</code> geretourneerd uit een Azure-opslagkluis. <code>options</code> kan worden opgegeven om de volgende opties te bepalen:    <ul><li><code>BlockSize</code> : Het aantal bytes dat moet worden gelezen voordat er op de gegevensverbruiker wordt gewacht. De standaardwaarde is 4 MB.</li><li><code>RequestSize</code> : Het aantal bytes dat moet worden gelezen in &#233;&#233;n HTTP-aanvraag bij de server. De standaardwaarde is 4 MB.</li><li><code>ConcurrentRequests</code> : De optie ConcurrentRequests ondersteunt het sneller downloaden van gegevens via het opgeven van het aantal aanvragen dat parallel moet worden uitgevoerd, ten koste van het geheugengebruik. Het vereiste geheugen is (ConcurrentRequest \* RequestSize). De standaardwaarde is 16.</li></ul>



## Category
Accessing data
