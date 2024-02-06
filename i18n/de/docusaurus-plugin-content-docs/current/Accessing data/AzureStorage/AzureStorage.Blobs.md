---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Gibt eine Navigationstabelle mit den Containern des angegebenen Kontos aus einem Azure-Speichertresor zurück.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Navigationstabelle mit je einer Zeile für die einzelnen Container unter der Konto-URL "<code>account</code>" aus einem Azure-Speichertresor zurück. Jede Zeile enthält einen Link zu den Containerblobs. <code>options</code> kann zum Steuern der folgenden Optionen angegeben werden:    <ul><li><code>BlockSize</code> : Die Anzahl der Bytes, die vor dem Warten auf den Datenconsumer gelesen werden sollen. Der Standardwert ist 4 MB.</li><li><code>RequestSize</code> : Die Anzahl von Bytes, die in einer einzigen HTTP-Anforderung an den Server gelesen werden sollen. Der Standardwert ist 4 MB.</li><li><code>ConcurrentRequests</code> : Die ConcurrentRequests-Option unterst&#252;tzt einen schnelleren Download von Daten, indem die Anzahl von Anforderungen angegeben wird, die parallel ausgef&#252;hrt werden sollen. Dies geht zulasten der Arbeitsspeichernutzung. Der erforderliche Arbeitsspeicher ist (GleichzeitigeAnforderungen ⋅ Anforderungsgr&#246;&#223;e). Der Standardwert ist 16.</li></ul>



## Category
Accessing data
