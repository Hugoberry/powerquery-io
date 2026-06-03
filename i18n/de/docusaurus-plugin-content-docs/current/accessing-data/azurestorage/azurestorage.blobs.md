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

Gibt eine Navigationstabelle mit je einer Zeile für die einzelnen Container unter der Konto-URL "`account`" aus einem Azure-Speichertresor zurück. Jede Zeile enthält einen Link zu den Containerblobs. `options` kann zum Steuern der folgenden Optionen angegeben werden:

-   `BlockSize` : Die Anzahl der Bytes, die vor dem Warten auf den Datenconsumer gelesen werden sollen. Der Standardwert ist 4 MB.
-   `RequestSize` : Die Anzahl von Bytes, die in einer einzigen HTTP-Anforderung an den Server gelesen werden sollen. Der Standardwert ist 4 MB.
-   `ConcurrentRequests` : Die ConcurrentRequests-Option unterstützt einen schnelleren Download von Daten, indem die Anzahl von Anforderungen angegeben wird, die parallel ausgeführt werden sollen. Dies geht zulasten der Arbeitsspeichernutzung. Der erforderliche Arbeitsspeicher ist (GleichzeitigeAnforderungen ⋅ Anforderungsgröße). Der Standardwert ist 16.



## Category
Accessing data
