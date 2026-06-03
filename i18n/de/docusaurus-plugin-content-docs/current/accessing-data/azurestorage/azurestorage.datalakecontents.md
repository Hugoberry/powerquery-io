---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Gibt den Inhalt der angegebenen Datei aus einem Azure Data Lake Storage-Dateisystem zurück.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Gibt den Inhalt der Datei an der URL (`url`) aus einem Azure Data Lake Storage-Dateisystem zurück. "`options`" kann zum Steuern der folgenden Optionen angegeben werden:

-   `BlockSize` : Die Anzahl der Bytes, die vor dem Warten auf den Datenconsumer gelesen werden sollen. Der Standardwert ist 4 MB.
-   `RequestSize` : Die Anzahl von Bytes, die in einer einzigen HTTP-Anforderung an den Server gelesen werden sollen. Der Standardwert ist 4 MB.
-   `ConcurrentRequests` : Die ConcurrentRequests-Option unterstützt einen schnelleren Download von Daten, indem die Anzahl von Anforderungen angegeben wird, die parallel ausgeführt werden sollen. Dies geht zulasten der Arbeitsspeichernutzung. Der erforderliche Arbeitsspeicher ist (GleichzeitigeAnforderungen ⋅ Anforderungsgröße). Der Standardwert ist 16.



## Category
Accessing data
