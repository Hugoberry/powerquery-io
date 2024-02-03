---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


## Description

Imports data from Azure Data Explorer (Kusto)


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

Imports data from your Azure Data Explorer (Kusto) instance


## Examples

### Example #1 
Returns a table of Storm Events information
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
A table with Storm Events from the "Samples" database in the "help" cluster
```



