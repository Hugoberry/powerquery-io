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

Gibt eine Navigationstabelle mit den Dokumenten zurück, die im angegebenen Container und den zugehörigen Unterordnern unter der Konto-URL <code>endpoint</code> in einem Azure Data Lake Storage-Dateisystem gefunden wurden. "<code>options</code>" kann zum Steuern der folgenden Optionen angegeben werden:    <ul><li><code>BlockSize</code> : Die Anzahl der Bytes, die vor dem Warten auf den Datenconsumer gelesen werden sollen. Der Standardwert ist 4 MB.</li><li><code>RequestSize</code> : Die Anzahl von Bytes, die in einer einzigen HTTP-Anforderung an den Server gelesen werden sollen. Der Standardwert ist 4 MB.</li><li><code>ConcurrentRequests</code> : Die ConcurrentRequests-Option unterst&#252;tzt einen schnelleren Download von Daten, indem die Anzahl von Anforderungen angegeben wird, die parallel ausgef&#252;hrt werden sollen. Dies geht zulasten der Arbeitsspeichernutzung. Der erforderliche Arbeitsspeicher ist (GleichzeitigeAnforderungen ⋅ Anforderungsgr&#246;&#223;e). Der Standardwert ist 16.</li><li><code>HierarchicalNavigation</code> : Ein logischer Wert (TRUE/FALSE), der steuert, ob die Dateien in einer Baumstruktur-Verzeichnisansicht oder als einfache Liste zur&#252;ckgegeben werden. Der Standardwert ist FALSE.</li></ul>



## Category
Accessing data
