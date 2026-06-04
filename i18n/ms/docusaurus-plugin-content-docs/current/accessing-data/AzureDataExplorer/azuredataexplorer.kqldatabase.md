---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Import data daripada gugusan Fabric Kusto dalam mod penemuan.


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

Import data daripada tika Pangkalan Data KQL anda


## Examples

### Example #1
Mengembalikan jadual maklumat Peristiwa Ribut
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Jadual dengan Peristiwa Ribut daripada pangkalan data "Sampel" dalam gugusan "bantuan"
```



