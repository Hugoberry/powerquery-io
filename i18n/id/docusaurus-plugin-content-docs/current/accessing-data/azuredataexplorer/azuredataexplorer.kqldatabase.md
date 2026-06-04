---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Impor data dari kluster Fabric Kusto dalam mode penemuan.


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

Mengimpor data dari instans Database KQL Anda


## Examples

### Example #1
Mengembalikan tabel informasi Aktivitas Storm
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Tabel dengan Aktivitas Storm dari database "Contoh" dalam gugusan "bantuan"
```



