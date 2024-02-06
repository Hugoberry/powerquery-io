---
title: Kusto.Contents
---

# Kusto.Contents


Imports data from Azure Data Explorer  (Kusto)


## Syntax

```powerquery
Kusto.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

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



