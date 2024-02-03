---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


## Description

Importē datus no Azure Data Explorer (Kusto)


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

Tiek importēti dati no Azure Data Explorer (Kusto) instances


## Examples

### Example #1 
Atgriež Storm notikumu informācijas tabulu
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Tabula ar Storm notikumiem no datubāzes “Samples” (Paraugi), kas atrodas klasterī “help” (palīdzība)
```



