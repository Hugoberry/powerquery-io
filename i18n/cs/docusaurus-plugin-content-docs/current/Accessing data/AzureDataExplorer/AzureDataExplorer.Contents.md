---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


## Description

Importuje data z Azure Data Explorer (Kusto)


## Syntax

```powerquery
AzureDataExplorer.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

Importuje data z vaší instance Azure Data Explorer (Kusto)


## Examples

### Example #1 
Vrátí tabulku informací o událostech Storm.
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Tabulka s událostmi Storm Events z databáze „Samples“ v clusteru „help“
```



