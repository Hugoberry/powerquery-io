---
title: Kusto.Contents
---

# Kusto.Contents


## Description

Mengimpor data dari Azure Data Explorer (Kusto)


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



