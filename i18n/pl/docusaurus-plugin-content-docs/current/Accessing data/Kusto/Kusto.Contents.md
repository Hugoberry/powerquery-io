---
title: Kusto.Contents
---

# Kusto.Contents


## Description

Importuje dane z usługi Azure Data Explorer (Kusto)


## Syntax

```powerquery
Kusto.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

Importuje dane z Twojego wystąpienia usługi Azure Data Explorer (Kusto)


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



