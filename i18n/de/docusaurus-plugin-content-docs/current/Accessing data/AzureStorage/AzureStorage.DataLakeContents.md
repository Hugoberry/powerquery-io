---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


## Description

Gibt den Inhalt der angegebenen Datei aus einem Azure Data Lake Storage-Dateisystem zurück.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Details

Gibt den Inhalt der Datei an der URL (<code>url</code>) aus einem Azure Data Lake Storage-Dateisystem zurück. "<code>options</code>" kann zum Steuern der folgenden Optionen angegeben werden:    <ul><li><code>BlockSize</code> : Die Anzahl der Bytes, die vor dem Warten auf den Datenconsumer gelesen werden sollen. Der Standardwert ist 4 MB.</li><li><code>RequestSize</code> : Die Anzahl von Bytes, die in einer einzigen HTTP-Anforderung an den Server gelesen werden sollen. Der Standardwert ist 4 MB.</li><li><code>ConcurrentRequests</code> : Die ConcurrentRequests-Option unterst&#252;tzt einen schnelleren Download von Daten, indem die Anzahl von Anforderungen angegeben wird, die parallel ausgef&#252;hrt werden sollen. Dies geht zulasten der Arbeitsspeichernutzung. Der erforderliche Arbeitsspeicher ist (GleichzeitigeAnforderungen ⋅ Anforderungsgr&#246;&#223;e). Der Standardwert ist 16.</li></ul>



## Category
Accessing data
