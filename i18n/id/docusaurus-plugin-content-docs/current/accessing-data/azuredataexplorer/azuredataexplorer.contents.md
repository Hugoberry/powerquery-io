---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


Mengimpor data dari Azure Data Explorer (Kusto)


## Syntax

```powerquery
AzureDataExplorer.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

Mengimpor data dari instans Azure Data Explorer (Kusto) Anda


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



