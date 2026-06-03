---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Gibt eine Navigationstabelle mit den Dokumenten zurück, die im angegebenen Container und den zugehörigen Unterordnern der Azure Data Lake Storage-Instanz gefunden wurden.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Navigationstabelle mit den Dokumenten zurück, die im angegebenen Container und den zugehörigen Unterordnern unter der Konto-URL `endpoint` in einem Azure Data Lake Storage-Dateisystem gefunden wurden. "`options`" kann zum Steuern der folgenden Optionen angegeben werden:

-   `BlockSize` : Die Anzahl der Bytes, die vor dem Warten auf den Datenconsumer gelesen werden sollen. Der Standardwert ist 4 MB.
-   `RequestSize` : Die Anzahl von Bytes, die in einer einzigen HTTP-Anforderung an den Server gelesen werden sollen. Der Standardwert ist 4 MB.
-   `ConcurrentRequests` : Die ConcurrentRequests-Option unterstützt einen schnelleren Download von Daten, indem die Anzahl von Anforderungen angegeben wird, die parallel ausgeführt werden sollen. Dies geht zulasten der Arbeitsspeichernutzung. Der erforderliche Arbeitsspeicher ist (GleichzeitigeAnforderungen ⋅ Anforderungsgröße). Der Standardwert ist 16.
-   `HierarchicalNavigation` : Ein logischer Wert (TRUE/FALSE), der steuert, ob die Dateien in einer Baumstruktur-Verzeichnisansicht oder als einfache Liste zurückgegeben werden. Der Standardwert ist FALSE.



## Category
Accessing data
