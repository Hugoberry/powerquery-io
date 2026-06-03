---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Importuj dane z klastra Kusto usługi Fabric w trybie odnajdywania.


## Syntax

```powerquery
AzureDataExplorer.KqlDatabase(
    optional cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

Importuje dane z wystąpienia bazy danych KQL


## Examples

### Example #1
Zwraca tabelę z informacjami o zdarzeniach StormEvents
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Tabela ze zdarzeniami Storm Events z bazy danych „Samples” w klastrze „help”
```



